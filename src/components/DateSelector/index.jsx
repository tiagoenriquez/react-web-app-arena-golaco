import { StyledLabelDate } from './styles';
import { StyledDateSelector } from './styles';

export default function DateSelector({ defaultValue, onChange, classes }) {
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
