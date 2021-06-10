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
  padding: 4em 2em;
  border: solid 1px ${COLORS.WHITE};
`;

const Login = () => {
  return (
    <main>
      <Window>
        <Heading addStyle="margin-bottom: 1em;">hello mah prend</Heading>
        <Label>Username</Label>
        <InputText addStyle="margin-bottom: 1em" />
        <Label>Password</Label>
        <InputText addStyle="margin-bottom: .5em" />
        <Link to="/">Forgot your password?</Link>
        <Button addStyle="margin-top: 1em; margin-bottom: 0.5em;">Login</Button>
        <p>
          Need an account? <Link to="/register">Register</Link>
        </p>
      </Window>
    </main>
  );
};

export default Login;
