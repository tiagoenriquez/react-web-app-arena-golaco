import { TextField } from '@material-ui/core';

export default function DateSelector({ defaultValue }) {
  return(
    <TextField
    id="date"
    label="Escolha uma data"
    type="date"
    defaultValue={defaultValue}
    InputLabelProps={{
      shrink: true,
    }}
    />
  );
}
