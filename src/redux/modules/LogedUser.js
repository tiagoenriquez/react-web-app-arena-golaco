export const Types = {
  SET_LOGEDSUSER: 'LOGEDUSER/SET_LOGEDUSER',
};

const initialState = {
  logedUser: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_LOGEDSUSER:
      return { ...state, logedUser: action.payload };
    default:
      return state;
  }
}

export function setLogedUser(logedUser) {
  return {
    type: Types.SET_LOGEDSUSER,
    payload: logedUser,
  };
}
