import styled from 'styled-components';
import Label from 'components/Label/Label';
import InputText from 'components/Input/InputText';
import Button from 'components/Button/Button';

const Modal = styled.div``;

const SignIn = () => {
  return (
    <main>
      <Modal>
        <InputText />
        <Button>Submit</Button>
      </Modal>
    </main>
  );
};

export default SignIn;
