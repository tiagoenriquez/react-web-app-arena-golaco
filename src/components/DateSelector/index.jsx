import PropTypes from 'prop-types';

import { StyledLabelDate } from './styles';
import { StyledDateSelector } from './styles';

export default function DateSelector({ defaultValue, onChange }) {
  return(
    <>
      <StyledLabelDate>Escolha uma data</StyledLabelDate>
      <StyledDateSelector
        id="date"
        type="date"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
}

DateSelector.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
