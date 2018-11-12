import * as types from '../actions/constants';



const parcels = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PARCELS_SUCCESS:
      return {
        ...state, ...action.parcels
      };
    case types.GET_PARCELS_ERROR:
      return {};

    default:
      return state;
  }
};

export default parcels;