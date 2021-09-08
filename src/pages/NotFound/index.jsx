import { Form }  from '../../components';
import image from '../../assets/jogador-futebol-derrotado.jpeg';
import { StyledNotFound } from './styles';

export default function NotFound () {

    return (
      <StyledNotFound>
        <Form header='Página não encontrada'>
          <img
            src={image}
            alt='Página não encontrada'
          />
        </Form>
      </StyledNotFound>
    );

}