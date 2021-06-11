import { useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthContext';
import { COLORS } from 'colors';
import Heading from 'components/Heading';
import Label from 'components/Label';
import InputText from 'components/InputText';
import InputPassword from 'components/InputPassword';
import Button from 'components/Button';
import Link from 'components/Link';

const Window = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: solid 1px ${COLORS.WHITE};
`;

const Register = () => {
  const { register } = useAuth();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleRegister = async () => {
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    try {
      await register(email, username, password);
    } catch (err) {}
  };

  return (
    <main>
      <Window>
        <Heading addStyle="margin-bottom: 1em;">create an account</Heading>
        <Label>email</Label>
        <InputText ref={emailRef} addStyle="margin-bottom: 1em;" />
        <Label>username</Label>
        <InputText ref={usernameRef} addStyle="margin-bottom: 1em;" />
        <Label>password</Label>
        <InputPassword ref={passwordRef} addStyle="margin-bottom: 1em;" />
        <Button addStyle="margin-bottom: 0.5em;" onClick={handleRegister}>
          register
        </Button>
        <span>
          <Link to="/login">already have an account?</Link>
        </span>
      </Window>
    </main>
  );
};

export default Register;
