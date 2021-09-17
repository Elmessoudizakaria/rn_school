/*
 * File Created: Thursday, 9th September 2021 11:09:04 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 9th September 2021 11:09:05 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import {
  CHOOSE_LEVEL,
  CHOOSE_SUBJECT,
  CHOOSE_TEACHER,
  SEARCH_TEACHERS,
  SEARCH_TEACHERS_FAILURE,
  SEARCH_TEACHERS_SUCCESS,
} from './types';
import school from '../../api/schoolApi';

export const chooseLevel = (level) => {
  return { type: CHOOSE_LEVEL, payload: level };
};

export const chooseSubject = (subject) => {
  return { type: CHOOSE_SUBJECT, payload: subject };
};
export const chooseTeacher = (teacher) => {
  return { type: CHOOSE_TEACHER, payload: teacher };
};

export const searchTeachers = ({ subject, level, lat, lng }) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_TEACHERS });
    school
      .get(`/find-teacher/Math/${level}/${lat}/${lng}`)
      .then((teachers) => searchTeachersSuccess(dispatch, teachers.data))
      .catch((err) => searchTeachersFail(dispatch));
  };
};

const searchTeachersFail = (dispatch) => {
  dispatch({ type: SEARCH_TEACHERS_FAILURE });
};

const searchTeachersSuccess = (dispatch, teachers) => {
  dispatch({
    type: SEARCH_TEACHERS_SUCCESS,
    payload: teachers,
  });
};
