import {
  CHOOSE_LEVEL,
  CHOOSE_SUBJECT,
  CHOOSE_TEACHER,
  SEARCH_TEACHERS,
  SEARCH_TEACHERS_FAILURE,
  SEARCH_TEACHERS_SUCCESS,
} from '../actions/types';

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
  subjectsList: [
    { name: 'Physique', icon: 'atom', color: '#d47345d8' },
    { name: 'Chemistry', icon: 'flask', color: '#45d4cdd8' },
    { name: 'Mathematics', icon: 'infinity', color: '#b345d4d8' },
    { name: 'History', icon: 'hourglass-end', color: '#4679e6d8' },
    { name: 'Frensh', icon: 'language', color: '#46e67bd8' },
    { name: 'Biology', icon: 'dna', color: '#e69346d8' },
    { name: 'English', icon: 'language', color: '#e64646d8' },
    { name: 'Geography', icon: 'globe-africa', color: '#d6e646d8' },
  ],
  teachers: [],
  loadTeachers: false,
  loadTeacherError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_LEVEL:
      return { ...state, level: action.payload };
    case CHOOSE_SUBJECT:
      return { ...state, subject: action.payload };
    case CHOOSE_TEACHER:
      console.log(action.payload);
      return { ...state, teacher: action.payload };
    case SEARCH_TEACHERS:
      return { ...state, loadTeachers: true };
    case SEARCH_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload, loadTeachers: false };
    case SEARCH_TEACHERS_FAILURE:
      return {
        ...state,
        loadTeacherError: 'Something went wrong please retry',
        loadTeachers: false,
      };
    default:
      return state;
  }
};
