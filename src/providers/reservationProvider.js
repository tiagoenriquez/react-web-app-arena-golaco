import api from "../services/api";

export function ReservationsListProvider ({ formattedDate }) {
  const response = api.get(`reserva/data=${formattedDate}`);
  return response;
}

export function ReservationProvider ({ datas }) {
  const response = api.post(`reserva`, datas);
  return response;
}

export function ReservationsOfTheUserProvider ({ logedUser_id, start }) {
  const response = api.get(`reserva/usuario=${logedUser_id}&inicio=${start}`);
  return response;
}

export function ReservationExclusionProvider ({ start }) {
  const response = api.delete(`reserva/${start}`);
  return response;
}
