import { UPDATE_DEVICE, UPDATE_MOBILE } from './homeConstants';
import { createReducer } from '../../app/common/util/reducerUtil'

const initialState = {  
  loading: false,
  device: null,
  mobile: false
};

export const updateDevice = (state, payload) => {
  return { ...state, device:payload };
}

export const updateMobile = (state, payload) => {
  return { ...state, mobile:payload };
}

export default createReducer(initialState, { 
  [UPDATE_DEVICE]: updateDevice,
  [UPDATE_MOBILE]: updateMobile
});
