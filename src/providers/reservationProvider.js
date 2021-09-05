import api from "../services/api";

export function ReservationsListProvider ({ formattedDate }) {
  const response = api.get(`reserva/data=${formattedDate}`);
  return response;
}

export function ReservationProvider ({ datas }) {
  const response = api.post(`reserva`, datas);
  return response;
}

export function ReservationsOfTheUserProvider ({ logedUser, start }) {
  console.log(`logedUser: ${logedUser} - Start of the period: ${start}`);
  const response = api.get(`reserva/usuario=${logedUser}&inicio=${start}`);
  return response;
}

export function ReservationExclusionProvider ({ start }) {
  console.log(start);
  const response = api.delete('reserva', start);
  return response;
}
