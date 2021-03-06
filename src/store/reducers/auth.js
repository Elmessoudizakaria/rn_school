/*
 * File Created: Wednesday, 8th September 2021 3:34:17 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 3:34:17 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
/*
 * File Created: Wednesday, 1st September 2021 2:19:08 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 1st September 2021 2:19:08 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import {
  LOAD_USER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  RESET_TOKEN,
} from '../actions/types';

const initialState = {
  user: null,
  email: '',
  error: '',
  password: '',
  loading: false,
  uid: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...initialState,
        loading: true,
      };
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case RESET_TOKEN:
      return {
        ...state,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Authentication Failed.',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
