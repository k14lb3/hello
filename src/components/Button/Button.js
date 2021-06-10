import styled from 'styled-components';
import { COLORS } from 'colors';

const StyledButton = styled.button`
  padding: 0.5em 1.5em;
  background-color: ${(props) =>
    props.outlined ? 'transparent' : COLORS.WHITE};
  border: solid 1px ${COLORS.WHITE};
  color: ${(props) => (props.outlined ? COLORS.WHITE : COLORS.BLACK)};
  font-size: inherit;
  cursor: pointer;
  ${(props) => props.addStyle}
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
