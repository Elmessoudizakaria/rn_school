import { CHOOSE_LEVEL, CHOOSE_SUBJECT, CHOOSE_TEACHER } from './types';

export const chooseLevel = (level) => {
  return { type: CHOOSE_LEVEL, payload: level };
};

export const chooseSubject = (subject) => {
  return { type: CHOOSE_SUBJECT, payload: subject };
};
export const chooseTeacher = (teacher) => {
  return { type: CHOOSE_TEACHER, payload: teacher };
};

//  make api call to get teacher list
// maje api call to send request to teacher