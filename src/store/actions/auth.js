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
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER } from './types';

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((err) => loginUserFail(dispatch));
  };
};

export const register = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER });
    const auth = getAuth();
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
