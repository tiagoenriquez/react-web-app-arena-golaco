import { useSelector } from 'react-redux';

export default function ReservationsList() {

  const { logedUser } = useSelector((state) => state.logedUser);

  const mostrarUsuario = () => console.log(logedUser.data);

  return (
    <>
      <h1>Lista de Reservas</h1>
      <button onClick={mostrarUsuario}>Clique aqui</button>
    </>
  );
  
}
