import styled from 'styled-components';
import { COLORS } from 'colors';

const StyledInputPassword = styled.input`
  padding: 0.5em;
  background-color: transparent;
  border: solid 1px ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-size: inherit;
  ${(props) => props.addStyle}
`;

const InputPassword = ({ ...rest }) => {
  return <StyledInputPassword {...rest} type="password" />;
};

export default InputPassword;
