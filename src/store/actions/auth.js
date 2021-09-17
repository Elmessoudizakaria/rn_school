/*
 * File Created: Thursday, 9th September 2021 11:08:40 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Thursday, 9th September 2021 11:08:40 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../api/firebaseApi';
import {
  LOAD_USER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  RESET_TOKEN,
} from './types';
import school from '../../api/schoolApi';

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        school
          .get('/load-user/' + user.user.email)
          .then((res) => {
            return loginUserSuccess(dispatch, {
              ...res.data,
              uid: user.user.uid,
            });
          })
          .catch((err) => loginUserFail(dispatch));
      })
      .catch((err) => loginUserFail(dispatch));
  };
};

export const register = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER });
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch));
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_FAILURE });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};
export const reloadUser = ({ email, uid }) => {
  return (dispatch) => {
    dispatch({ type: LOAD_USER });
    school
      .get('/load-user/' + email)
      .then((res) => {
        return loginUserSuccess(dispatch, { ...res.data, uid: uid });
      })
      .catch((err) => loginUserFail(dispatch));
  };
};
export const resetToken = (token) => {
  return {
    type: RESET_TOKEN,
    payload: token,
  };
};
