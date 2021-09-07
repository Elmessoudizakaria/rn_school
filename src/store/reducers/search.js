import { CHOOSE_LEVEL, CHOOSE_SUBJECT, CHOOSE_TEACHER } from '../actions/types';

/*
 * File Created: Tuesday, 7th September 2021 2:07:17 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 7th September 2021 2:07:17 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
const initialState = {
  teacher: '',
  subject: '',
  level: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_LEVEL:
      return { ...state, level: action.payload };
    case CHOOSE_SUBJECT:
      return { ...state, subject: action.payload };
    case CHOOSE_TEACHER:
      return { ...state, teacher: action.payload };
    default:
      return state;
  }
};
