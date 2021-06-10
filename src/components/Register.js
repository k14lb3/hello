import styled from 'styled-components';
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
  return (
    <main>
      <Window>
        <Heading addStyle="margin-bottom: 1em;">Create an account</Heading>
        <Label>Email</Label>
        <InputText addStyle="margin-bottom: 1em" />
        <Label>Username</Label>
        <InputText addStyle="margin-bottom: 1em" />
        <Label>Password</Label>
        <InputPassword addStyle="margin-bottom: 1em" />
        <Button addStyle="margin-bottom: 0.5em;">Register</Button>
        <span>
          <Link to="/login">Already have an account?</Link>
        </span>
      </Window>
    </main>
  );
};

export default Register;
