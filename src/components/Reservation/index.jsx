import { useSelector } from 'react-redux';

export default function Reservation() {

  const { logedUser } = useSelector((state) => state.logedUser);

  const showUser = () => console.log(logedUser.data);

  return (
    <>
      <h1>Reserve um horário</h1>
      <button onClick={showUser}>Clique aqui</button>
    </>
  );
  
}
