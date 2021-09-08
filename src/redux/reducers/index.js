import { combineReducers } from 'redux';

import logedUser from '../modules/LogedUser';
import reservedTimes from '../modules/ReservedTimes';
import aTimeWasReserved from '../modules/ATimeWasReserved';

export default combineReducers({
  logedUser, reservedTimes, aTimeWasReserved,
});
