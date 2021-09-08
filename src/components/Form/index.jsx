import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Link, FormStyled, HeaderStyled } from './styles';

export default function Form({ children, header }) {

  const { logedUser } = useSelector((state) => state.logedUser);

  return (
    <FormStyled>
      <HeaderStyled>
        <h1>{header}</h1>
      </HeaderStyled>
      {children}
      {
        logedUser &&
          <footer>
            <p>
              <Link href='#top'><u>Ir ao topo</u></Link>
            </p>
          </footer>
      }
    </FormStyled>
  );
}

Form.propTypes = {
  header: PropTypes.string.isRequired
}
