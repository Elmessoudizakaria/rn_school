/*
 * File Created: Thursday, 9th September 2021 11:09:04 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 9th September 2021 11:09:05 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

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
