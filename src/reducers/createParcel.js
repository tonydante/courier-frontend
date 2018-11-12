import * as types from '../actions/constants';

export const initialState = {
  parcel: {}
};

const parcel = (state = initialState, action) => {
  switch (action.type) {
    // case types.GET_PARCEL_SUCCESS:
    //   return {
    //     ...state, ...action.parcel
    //   };
    case types.CREATE_PARCEL_SUCCESS:
      return {
        ...state, parcels: [...state.parcel, action.parcel]
      };
    // case types.GET_PARCEL_ERROR:
    case types.CREATE_PARCEL_FAIL:
      return {};

    default:
      return state;
  }
};

export default parcel;