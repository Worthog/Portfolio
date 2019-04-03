import { TEST_DEVICE, UPDATE_DEVICE, UPDATE_MOBILE } from './homeConstants';

import { 
  isBrowser,
  isMobile, 
} from "react-device-detect";

export const setDevice = (payload) => {
  return {
    type: UPDATE_DEVICE,
    payload
  }
}

export const setMobile = (payload) => {
  return {
    type: UPDATE_MOBILE,
    payload
  }
}


export const testDeviceAction = () => {
  return {
    type: TEST_DEVICE
  }
}



export const testDevice = () => {
  return async dispatch => {   
    if (isMobile) {
      console.log("This is a mobile device");  
      dispatch(setDevice('mobile')); 
      dispatch(setMobile(true));
    }; 
    if (isBrowser) {
      console.log("This is a Browser"); 
      dispatch(setDevice('desktop')); 
      dispatch(setMobile(false));
    }; 

  }
}
