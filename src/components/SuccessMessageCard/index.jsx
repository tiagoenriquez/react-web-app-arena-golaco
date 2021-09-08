import PropTypes from 'prop-types';
import { SuccessCardStyled } from "./styles";

export default function SuccessMessageCard({ children }) {

    return <SuccessCardStyled>{children}</SuccessCardStyled>;
}

SuccessMessageCard.propTypes = {
  children: PropTypes.string.isRequired
}
