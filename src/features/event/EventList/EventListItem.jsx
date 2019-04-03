import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import EventListAttendee from './EventListAttendee'
import format from 'date-fns/format'
import { objectToArray } from '../../../app/common/util/helpers'
import ReactMarkdown from 'react-markdown' ;
import { osVersion, osName } from "react-device-detect";


class EventListItem extends Component {
  render() {
    const {event} = this.props
    let eventDate;
    if (event.date) {
      eventDate = event.date.toDate();
    };

    // ** test the OS version if it is less than 10 skip attendees **

    const OS = parseInt(osVersion, 10); 
    
    let showAttendees = true; 
    let showDetails = true;

    if ( osName === "iOS" && OS < 6) {
     showAttendees = false;
     showDetails = false;
    }

    // console.log("event = ", event); 
    // console.log ("Attendees", event.attendees ) ;
    // let goodArray = objectToArray(event.attendees);
    // console.log ("Good Array = ", goodArray ) ;
    // goodArray.map( (attendee) => (
    //    console.log("key =",  attendee.id, "Attendee = ", attendee)  

    // )); 

    // let newarray = newobjectToArray(event.attendees);
    // console.log ("newarray = ", newarray ) ;

    // for (const [key, value] of newarray.entries()) {
    //   console.log("key = ", key);
    //   console.log("value = " , value);
    // }

    // newarray.map( (attendee) => (
    //   console.log("key =", key, "Attendee = ", attendee)  

    //  )); 

    // objectToArray(event.attendees).map((attendee) => (
    //   console.log ("key = ", attendee.id ) 
    //  )) ; 

    // let keyarray = keyobjectToArray(event.attendees);
    // console.log ("keyarray = ", keyarray ) ;


    return (
    <Segment.Group style={{ marginBottom: '6em' }}>
    <Segment basic >
    <Grid container stackable >  
        <Grid.Row>
        <Grid.Column width={12}>
        <Segment basic attached="top" style={{ padding: '0' }}> 
            <Image src={`/assets/${event.category}.jpg`} fluid rounded />     
           </Segment>   
        </Grid.Column>
        <Grid.Column width={4} floated='right'>
        <Segment basic >            
           <Item className="main text" >           
             <span  style={{ fontWeight: 'bold' }} > {event.title} </span>                         
           </Item>         
         </Segment>
         <Segment basic >            
           <Item className="main text" >           
             <Icon name="clock" /> 
             <span  style={{ fontWeight: 'bold' }} > Date:  &nbsp; </span>            
             {format(eventDate, 'dddd Do MMMM')} at {format(eventDate, 'HH:mm')}
           </Item>         
         </Segment>
         <Segment basic >   
           <Item className="main text" >
             <Icon name="marker" /> 
             <span  style={{ fontWeight: 'bold' }} > Location:  &nbsp; </span>
             {event.venue}
           </Item>              
         </Segment> 


         {/* skip the next section if showAttendees is false */}

        
         { showAttendees &&              
          <Segment basic >
           <Item.Header className="main text">Attendees</Item.Header>
           <br/>
           <Item.Description>
              <List horizontal>
              
              <Item.Description>
              <List horizontal>
            
              {event.attendees && objectToArray(event.attendees).map((attendee) => (
              <EventListAttendee key={attendee.id} attendee={attendee}/>
              ))}

              </List>
         
              </Item.Description>     

          
             
              ))}

             
            

              </List>         
          </Item.Description>      
         </Segment>            
         }
  

        </Grid.Column>
      </Grid.Row>
    </Grid>
        

      <Segment basic >
        <ReactMarkdown
          className="main text"
          source={event.description}
          />
        <br/>
      </Segment> 
         { showDetails &&     
         <Segment clearing basic >   
           <Button as={Link} to={`/event/${event.id}`} color="teal" content="View Details" />  
           <Button as={Link} to={`/event/${event.id}`} color="blue" content="Sign up" />                
         </Segment>  }
         { !showDetails &&     
         <Segment clearing basic >   
           <Button as={Link} to={`/event/eventfallback`} color="red" content="View Details" />  
           <Button as={Link} to={`/event/eventfallback`} color="red" content="Sign up" />                
         </Segment>  }

      </Segment>       

      </Segment.Group>
    );
  }
}

export default EventListItem;
