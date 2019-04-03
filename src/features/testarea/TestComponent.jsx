import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { testDevice } from './testActions';
import { openModal } from '../modals/modalActions'


import {
  
  isBrowser,
  isMobile,
  deviceDetect,
  osVersion, osName, browserName, browserVersion,
  mobileVendor, mobileModel, mobileDevice
  
} from "react-device-detect";


const mapState = state => ({
  device: state.home.device,
  mobile: state.home.mobile,
  data: state.test.data,
  loading: state.test.loading
});

const actions = {
 
  openModal,
  testDevice
};



class TestComponent extends Component {

  

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleTestDevice = () => {
    
    console.log("You clicked testDevice"); 
    this.setState({ scriptLoaded: true });
    if (isMobile) {
      console.log("This is a mobile device"); 
    }; 
    if (isBrowser) {
      console.log("This is a Browser"); 
    }; 
    console.log("OS Version: ", osVersion);
    console.log("OS Name: ", osName);
    console.log("Browser Name: ", browserName);
    console.log("Browser Version: ", browserVersion);
    console.log("Device Detect: ", deviceDetect); 
    const os = parseInt(osVersion,10); 
    if (os < 10) { 
      console.log("os version to old")
    }; 
  };

  render() {
  
 

    return (
      <React.Fragment>

        
        <Button onClick={this.handleTestDevice} >Test the Device</Button>
        
        <div >
         
          <div >
            <ul>
              <li>OS Version: {osVersion} </li>
              <li>OS Name: {osName} </li>
              <li>Browser Name: {browserName} </li>
              <li>Browser Version: {browserVersion} </li>
              <li>mobileVendor: {mobileVendor} </li>
              <li>Mobile Device: {mobileDevice} </li> 
              <li>Mobile Model: {mobileModel}</li>
            </ul>
                                 
          </div>   

         
        </div>
   
      </React.Fragment>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
