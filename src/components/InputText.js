import { forwardRef } from 'react';
import styled from 'styled-components';
import { COLORS } from 'colors';

const StyledInputText = styled.input`
  padding: 0.5em;
  background-color: transparent;
  border: solid 1px ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-size: inherit;
  ${(props) => props.addStyle}
`;

const InputText = ({ ...rest }, ref) => {
  return <StyledInputText ref={ref} {...rest} type="text" />;
};

export default forwardRef(InputText);
