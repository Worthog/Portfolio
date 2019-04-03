import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const notes = ({history}) => {
  return (
    <div>     
      <h1>Development (Temporary)</h1>    
      <h5>Some notes to aid with the development of this application.  These are not part of the Website. </h5>
      <h5>This is a To-Do list of things that need fixed, or just haven't got to yet. </h5>
      <br/>
      <br/>
      <br/>


      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <h4>General</h4>
            
            <p>
              This is the 1st. page after the Landing page. 
              Do we want a main page? 
            </p>
           
            <ul>
              <li><del>Remove the Blog page, add it back later, maybe?</del> </li>
              <li><del>Fix the link to "Create Event", see org code</del></li>
              <li><del>Remove My Events from the user menu </del></li>
              <li>Change the pictures </li>
              <li>Set up github project to track changes</li>
             
            </ul>

          </Segment>

          <h4>Events </h4>
          <Segment>
            <p>Seems to work ok.</p>
            <ul>   
              <li>Fix the pull down selector and the images. </li> 
              <li>Add a Markdown editor to make the event description to make it more interesting
                  and improve the formatting.
               </li> 
               <li>Oh Oh , why did the terminal hang up?</li>                           
            </ul>          
          </Segment>
        
          <h4>User Profile & Menu </h4>
          <Segment>
            <ul>   
              <li>Clean up the Profile page</li>   
              <li>Add the Email and Phonenumber to the db</li>          
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
