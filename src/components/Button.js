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
  transition-duration: 200ms;
  ${(props) => props.addStyle}

  &:hover {
    background-color: ${COLORS.WHITEY};
  }

  &:active {
    opacity: 0.90;
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
