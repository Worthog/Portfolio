import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
// import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux';
import { withFirestore, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom' ;

// import LoadingComponent from '../../../app/layout/LoadingComponent'

import Footer from '../../home/Footer' ; 
import {
    
  osVersion, osName, browserName, browserVersion,
  mobileVendor, mobileModel
  
} from "react-device-detect";



const mapState = (state) => {
  let event = {};

   return {
    requesting: state.firestore.status.requesting,
    event,
    loading: state.async.loading,
    auth: state.firebase.auth,
   
  };
};

const actions = {
  
};

class EventFallbackPage extends Component {
  state = {
    initialLoading: true
  }

  
  
  render() {
    

      return (
      <React.Fragment>              

      <Grid columns='equal'>
        <Grid.Row>          
          <Grid.Column width={12}>
          <Image src={`/assets/phone.jpg`} />           
          </Grid.Column>         
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
          <div className="dancing title">
              I Love Vintage Stuff, but...
          </div>
          <br/><br/>
          <div className="main text">
          <p>
              If you reached this page your Operating System is a bit outdated.
              Unfortunately, you can't access features such as on-line sign-up with
              your current device.  
          </p>
          <p> Sorry, we tried really hard - couldn't get these features to work
              without compromising security, but we haven't given up yet. </p>

          <p> In the mean time, you can upgrade to a newer Operating 
              System, or try a different desktop/mobile phone/tablet. 
          </p> 
          <p> 
            Or check out the other options on the <Link to='/contact'>Contact Page.</Link>          
          
          </p>       
          </div>  
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={12}>          
          <div className="main text">
            <p>Your device <br/><br/></p>
            <ul>
              <li>OS Version: {osVersion} </li>
              <li>OS Name: {osName} </li>
              <li>Browser Name: {browserName} </li>
              <li>Browser Version: {browserVersion} </li>
              <li>mobileVendor: {mobileVendor} </li>              
              <li>Mobile Model: {mobileModel}</li>
            </ul>                     
            </div>          
           </Grid.Column>           
          </Grid.Row>
      </Grid>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => props.auth.isLoaded && !props.auth.isEmpty)
)(EventFallbackPage);
