import React from 'react';
import { Grid, Segment, Divider, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../home/Footer' ;
import Fade from 'react-reveal/Fade';

const teaching = ({history}) => {
  return (
    <React.Fragment>                
     
     <Segment className='block6' style={{ padding: '8em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='left'>
          
          <Grid.Column width={10} style={{ paddingBottom: '5em', paddingTop: '2em' }}>
            <Header as='h3' style={{ fontSize: '3em' , color: 'white'}}>
             Projects & Demos 
            </Header>            

          </Grid.Column>

        
        </Grid.Row>
      </Grid>
    </Segment>      

      <Grid>
        <Grid.Column width={16}>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '3em 0em', color:'slateGrey'  }}
        >
          Reiki Level I
        </Divider>                          
            
            <h3 className="dancing text">
            Activate Your Healing Ability -  
            Release Energetic Blocks -
            Channel Healing Energy
            </h3>
            <br/>                          
            <p className="main text">
            Level I is for self-healing and well-being. This is where you start your new life's journey.
            You will learn how to apply Reiki energy through your hands to balance your body, mind and spirit.
            The class starts with a history and principles of Reiki, continues with meditations, 
            techniques to cleanse your energy field and concludes with attunement and practice. 
            Attunement is a sacred and empowering experience and can be a life changing experience. 
            </p>

            <h3   style={{ margin: '3em 0em', color:'slateGrey'  }}>You will learn</h3>

            <ul>           
            <li className="main text">The history of the Dr. Usui Reiki method
            and 5 Reiki principles</li>
            <li className="main text">What Reiki is and how it works</li>
            <li className="main text">Introduction to the 7 Chakras</li>
            <li className="main text">Hand positions for self-treatment and treating others</li>            
            <li className="main text">How to strengthen your inner energy</li>                          
            <li className="main text">Techniques to ground yourself and maintain your balance in everyday life</li>        
            </ul>
            <br/>
            

            <p className="main text">     
            $200 - Training manual, Certificate of completion,  and lunch is included <br/>             
            </p>

        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '3em 0em', color:'slateGrey'  }}
        >
          Reiki Level II
        </Divider>                          
           
            <h3 className="dancing text">
            Deepen your Reiki Skills -  
            Connect with your true self -
            Distance Healing
            </h3>

            <p className="main text">
            Level II is about expanding your Reiki knowledge. 
            
            You will learn how to apply Reiki energy through your hands to balance your body, mind and spirit.
            The class starts with receiving the level II symbols and a level II attunement. 
            You will learn how to send Reiki energy from a distance and  
            techniques to cleanse your energy field.  It concludes with further attunement and practice.
            </p>

            <h3   style={{ margin: '3em 0em', color:'slateGrey'  }}>You will learn</h3>                      

            <ul>
            
            <li className="main text" >Reiki Level 2 Symbols </li>
            <li className="main text" >How to use these powerful symbols</li>            
            <li className="main text" >How to send distant healing</li>            
            <li className="main text" >How to ground, protect & cleanse your energy as you work with others</li>           
            <li className="main text" >How to give a full Reiki treatment</li>
            </ul>
                  
            <p className="main text">                 
            $250 - Training manual, Certificate of completion,  and lunch is included <br/>              
            </p>

        </Grid.Column>
      </Grid>

      <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '3em 0em', color:'slateGrey'  }}
        >          
        </Divider>          
        <p className="main text">     

        See the <NavLink to={`/events`}> Events Page </NavLink> for upcoming sessions. 
        </p>

        <br/>
        <br/>
        <Fade duration={3000} >
        <Segment secondary>
            <blockquote>
            
          “What you think, you become.
          What you feel, you attract.
          What you imagine, you create.”

          ― Buddha   
            </blockquote>
            
          </Segment>
          </Fade>
        <br/>
        <br/>

    <Footer/>
    </React.Fragment> 
  );
};

export default teaching;

