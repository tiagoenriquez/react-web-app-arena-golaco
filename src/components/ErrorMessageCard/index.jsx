import PropTypes from 'prop-types';
import { ErrorCardStyled } from "./styled";

export default function ErrorMessageCard({ children }) {

    return <ErrorCardStyled>{children}</ErrorCardStyled>;

}

ErrorMessageCard.propTypes = {
  children: PropTypes.string.isRequired
}
