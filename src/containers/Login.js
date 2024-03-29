import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'colors';
import Heading from 'components/Heading';
import Label from 'components/Label';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Link from 'components/Link';

const Window = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: solid 1px ${COLORS.WHITE};
`;

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <Window>
        <Heading addStyle="margin-bottom: 1em;">hello mah prend</Heading>
        <Label>username</Label>
        <InputText addStyle="margin-bottom: 1em;" />
        <Label>password</Label>
        <InputText addStyle="margin-bottom: .5em;" />
        <span>
          <Link to="/">forgot your password?</Link>
        </span>
        <Button
          hasLoader={{ loading: loading }}
          addStyle="margin-top: 1em; margin-bottom: 0.5em;"
          label="login"
        />
        <span>
          need an account? <Link to="/register">register</Link>
        </span>
      </Window>
    </main>
  );
};

export default Login;
