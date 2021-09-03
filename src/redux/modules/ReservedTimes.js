import { format } from 'date-fns';

export const Types = {
  SET_RESERVEDTIMES: 'datas/SET_RESERVEDTIMES',
};

const initialState = {
  reservedTimes: {
    times: [],
    date: format(new Date(), 'yyyy-MM-dd')
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESERVEDTIMES:
      return { ...state, reservedTimes: action.payload };
    default:
      return state;
  }
}

export function setReservedTimes(reservedTimes) {
  return {
    type: Types.SET_RESERVEDTIMES,
    payload: reservedTimes,
  };
}
