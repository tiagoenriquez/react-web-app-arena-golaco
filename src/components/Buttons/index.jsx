import Button from '../Button';

import { ButtonsStyles } from './styles';

export default function Buttons({ loginLabel, registerLabel, loginClick, registerClick }) {
  return (
    <ButtonsStyles>
      <Button onClick={loginClick}>
        {loginLabel}
      </Button>
      <Button onClick={registerClick}>
        {registerLabel}
      </Button>
    </ButtonsStyles>
  );
}