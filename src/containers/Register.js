import { useState, useRef } from 'react';
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
  padding: 2em;
  border: solid 1px ${COLORS.WHITE};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Register = () => {
  const { register } = useAuth();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      setLoading(true);
      await register(email, username, password);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <main>
      <Window>
        <Heading addStyle="margin-bottom: 1em;">create an account</Heading>
        <Form onSubmit={handleRegister}>
          <Label>email</Label>
          <InputText
            ref={emailRef}
            addStyle="margin-bottom: 1em;"
            autoComplete="new-email"
          />
          <Label>username</Label>
          <InputText
            ref={usernameRef}
            addStyle="margin-bottom: 1em;"
            autoComplete="new-username"
          />
          <Label>password</Label>
          <InputPassword
            ref={passwordRef}
            addStyle="margin-bottom: 1em;"
            autoComplete="new-password"
          />
          <Button
            hasLoader={{ loading: loading }}
            label="register"
            addStyle="margin-bottom: 0.5em;"
          />
          <span>
            <Link to="/login">already have an account?</Link>
          </span>
        </Form>
      </Window>
    </main>
  );
};

export default Register;
