import { combineReducers } from 'redux';

import logedUser from '../modules/LogedUser';
import reservedTimes from '../modules/ReservedTimes';

export default combineReducers({
  logedUser, reservedTimes,
});
