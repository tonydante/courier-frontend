import * as types from '../actions/constants';


const parcel = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PARCEL_SUCCESS:
      return {
        ...state, ...action.parcel
      };
    case types.GET_PARCEL_ERROR:
      return {};

    default:
      return state;
  }
};

export default parcel;