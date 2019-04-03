import React, { Component } from 'react';
import { Segment, Grid, Icon, Image } from 'semantic-ui-react';
import ContactMap from './ContactMap'
import Fade from 'react-reveal/Fade';
import Footer from '../home/Footer' ;

class ContactPage extends Component {
  state = {
    showMap: false
  }

  componentWillUnmount() {
    this.setState({
      showMap: false
    })
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  render() {
   
let lat = 43.9988839 ;
let lng = -79.68658370000003 ;

    return (
     <React.Fragment>

        <Segment basic >
          <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image
                src={`/assets/maryportrait.jpg`}
                size='large'
                rounded
              />         
            </Grid.Column>
        
            <Grid.Column width={6} >
            <Fade right duration={3000} >              
              <p className="dancing text" >
                I'd love to hear from you...
              </p>
            </Fade>  
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>

       
        <Segment.Group >

        <Segment >
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="blue" name="envelope" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p className="contactpage text" >
                Email: AlanCranston@rogers.com 
              </p>           
            </Grid.Column>
          </Grid>
        </Segment> 
       
        <Segment >
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="blue" name="phone" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p className="contactpage text" >        
              Home: &nbsp; (905) 939-8183 
              </p>           
            </Grid.Column>

            <Grid.Row>
            <Grid.Column width={1}>
              <Icon size="large" color="blue" name="mobile" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p className="contactpage text" >             
              Cell: &nbsp; &nbsp;  &nbsp; (289) 231-5318 
              </p> 
            </Grid.Column>      
            </Grid.Row>  
          </Grid>
        </Segment>                   
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="blue" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span className="contactpage text">Schomberg, Ontario </span>
            </Grid.Column>
            {/* <Grid.Column width={4}>
              <Button onClick={this.showMapToggle} color="blue" content={this.state.showMap ? 'Hide Map' : 'Show Map'}/>
            </Grid.Column> */}
          </Grid>
        </Segment>
        {this.state.showMap &&
        <ContactMap lat={lat} lng={lng}/>}
      </Segment.Group>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default ContactPage;

