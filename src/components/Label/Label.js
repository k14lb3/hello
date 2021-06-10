import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: inherit;
  ${(props) => props.addStyle}
`;

const Label = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
