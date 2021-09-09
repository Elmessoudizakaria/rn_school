import { combineReducers } from 'redux';
import auth from './auth';
import search from './search';

export default combineReducers({
  search: search,
  auth: auth,
});
