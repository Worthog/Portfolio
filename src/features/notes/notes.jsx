import React from 'react';
import MediaQuery from 'react-responsive';
import { 
  Grid, 
  Segment
 } from 'semantic-ui-react';

const notes = ({history}) => {
  return (
    <div>  

{/* ---------- testblock ----------------------- 
    add background
    move background to grid
    remove vertical from sement
    css cover not good try contain, add text fluid to container
*/}

  <div>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1224px)">
      <div>You are a desktop or laptop</div>
      <MediaQuery query="(min-device-width: 1824px)">
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query="(orientation: portrait)">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query="(min-resolution: 2dppx)">
      <div>You are retina</div>
    </MediaQuery>
  </div>





      <h1>Development (Temporary)</h1>    
      <h5>Some notes to aid with the development of this application.  These are not part of the Website. </h5>
      <h5>This is a To-Do list of things that need fixed, or just haven't got to yet. </h5>
      <br/>
      <br/>
      <br/>


      <Grid>
        <Grid.Column width={10}>
         

          <h4>Events </h4>
          <Segment>
            <p>Seems to work ok.</p>
            <ul>   
               <li><del>Fix the pull down selector and the images.</del> </li> 
               <li><del>Add a Markdown editor to improve the formatting</del></li> 
               <li>Move "recent events" to a new page / or put it below events list</li> 
                                   
            </ul>          
          </Segment>
        
          <h4>User Profile & Menu </h4>
          <Segment>
            <ul>   
        
              <li>Level 1 - basic account (registered)</li>
              <li>Level 2 - paid member</li>
              <li>Level 3 - Student ( grant access to course materials)</li>
              <li>Level 4 - Admin ( edit and create events)</li>             
            
             
            </ul>
          
          </Segment>
       
          <h4>Mastery </h4>
          <Segment>
            <ul>
            <li>Add page(s) for course materials, will need multiple levels of authorization. </li>
            </ul>
          </Segment>
        </Grid.Column>
      </Grid>


    </div>
  );
};

export default notes;
