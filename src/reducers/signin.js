import * as types from '../actions/constants';

export const initialState = {
  userName: '',
  password: '',
  isLoading: false
};

const signin = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state, ...action.user
      };

    case types.LOGIN_USER_ERROR:
      return {};

    default:
      return state;
  }
};

export default signin;