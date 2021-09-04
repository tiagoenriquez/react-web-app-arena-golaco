import api from "../services/api";

export function ReservationsListProvider ({ formattedDate }) {

  const response = api.get(`reserva/data=${formattedDate}`);

  return response;

}

export function ReservationProvider ({ formattedDate }) {

  // const response = api.post(``)

  // return response;

}
