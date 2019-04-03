import React from 'react';
import { Segment } from 'semantic-ui-react';
import Footer from '../home/Footer' ;
import './about_fallback.css' ;
import './about.css' ;

const AboutPage = ( ) => {
  return (
  

<Segment basic>

<div className="about-wrapper"> 
    <div className="about-img" />
        
    <div className="about-text">  
    <p> 
      I am a Registered Nurse working with patients in palliative care. 
      I am also a Reiki Master/Teacher and Therapeutic Touch Practitioner.
    </p>
    <p>
    I have always felt I was on a spiritual path.  I sought and achieved my Reiki mastery in 2014 with 
    Dean Noblett & Rebecca Couch from "Heartlight.ca".  They were, and still are my guiding light through my 
    self-discovery. 
    </p>

    <p>I volunteer at Margaret Bahen Hospice, and Doane House Hospice providing Reiki and Visualization sessions 
      to both patients and staff.       
    </p>

    <p>I also do evening workshops at Doane House on an occasional basis, working with 
    the Bereavment Group, teaching relaxation and imagery techniques. 
    </p>


    <p>
      I look forward to teaching and guiding you through your Reiki experience. 
    </p>

    
    <p className="aboutSignature" >
            Mary 
    </p>

              
    </div>
    
    <Footer/>   
 </div> 
</Segment> 

  );  
};

export default AboutPage;
