import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom' ;
// import { testDevice } from './homeActions';
import Footer from './Footer' ;
import './fallback.css'; 
import './block1.css'; 
import './block2.css';
import './block3.css'; 
import './block4.css';

import {
  Button, 
  Segment
    
} from 'semantic-ui-react' ;


const mapState = state => ({
    // device: state.home.device,
    loading: state.home.loading
});

const actions = {
    // testDevice
};

class HomePage extends Component {

  
  state = { 
    // loading: false,
    sidebarOpened: false
  }


  handleToggle = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened })
  }

  handleCloseSidebar = () => {
    this.setState({ sidebarOpened: false }); 
  }
  
  
  componentDidMount = () => {
    // console.log("call test device"); 
    // this.props.testDevice();

  }

  render() {

  
  return (
 
 <React.Fragment>
   

{/* ---------- Homepage Intro -----------------------  */}

        <div className="ui vertical masthead center aligned segment basic">  
        <div className="ui text container"> 
          <Fade top cascade duration={3000} >
          <h1 className="introheader">
           Alan Cranston
          </h1>
          </Fade>
          <Zoom duration={3000} delay={1000}>
          <h1 className="introheader">Portfolio</h1>
          </Zoom>
          <br/><br/>                    
          <Link to="/main"><Button className="btnwelcome" >Click ...</Button></Link>     
         </div> 
        </div>  
  

{/* ------------ Section 1    --------- */}

<Segment basic>  
    <div className="block1-wrapper"> 
    
          <div className="block1-img" />
          <div className="block1-title">
            Block 1 Title
          </div>                      
          
           {/* <Fade left duration={4000} cascade big >  */}
          
           <div className="block1-subtitle" >
           <p>          
          Put some text here.<br/> 
           </p>
          </div> 

           {/* </Fade>                         */}
              
            <div className="block1-text" >
            <p>
            ... and maybe here.
            
            </p> 
            </div>
      

      <div className="block1-footer">
            <Link to="/main"><button className="btn1" >Tell me more...</button></Link>
        </div>
    
    </div>
 
</Segment>  

{/* ------------ Section 2    --------- */}

   
<Segment basic>    
    <div className="block2-wrapper">   
      <div className="block2-img" />
      <div className="block2-title">
        Put title here  
      </div>
       <div className="block2-subtitle" >
            <p>
            This is Block 2
            <br/>
            <br/>             
            </p>    
        </div>

    </div>
</Segment>     
   



{/* ------------ Section 4    ---------
    Note: added sticky text container - removed sticky from mobile version
*/}

<Segment basic>     
    <div className="block4-wrapper"> 
      <div className="block4-img" />
      <div className="block4-title">
          Events Demo page
      </div>   
      <div className="block4-subtitle">
        
        <br/><br/>
        See the events demo here.  
        <br/>        
      </div>
      <div className="block4-footer"> 
          <Link to="/training"><button className="btn1" >Clcik here...</button></Link>
      </div>
     
      
    </div>  
</Segment>   

{/* ------------ Page Footer   --------- */}

    <Footer/> 
    </React.Fragment>
  );
  };
};

export default connect(mapState, actions)(HomePage);