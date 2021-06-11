import { forwardRef } from 'react';
import styled from 'styled-components';
import { COLORS } from 'colors';

const StyledInputPassword = styled.input`
  padding: 0.5em;
  background-color: transparent;
  border: solid 1px ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-size: inherit;
  outline: none;
  transition-duration: 200ms;

  &:focus {
    border-color: ${COLORS.GREEN};
  }

  ${(props) => props.addStyle}
`;

const InputPassword = ({ ...rest }, ref) => {
  return <StyledInputPassword ref={ref} {...rest} type="password" />;
};

export default forwardRef(InputPassword);
