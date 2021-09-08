export const Types = {
  SET_ATIMEWASRESERVED: 'datas/SET_ATIMEWASRESERVED',
};

const initialState = {
  aTimeWasReserved: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_ATIMEWASRESERVED:
      return { ...state, aTimeWasReserved: action.payload };
    default:
      return state;
  }
}

export function setATimeWasReserved(aTimeWasReserved) {
  return {
    type: Types.SET_ATIMEWASRESERVED,
    payload: aTimeWasReserved,
  };
}
