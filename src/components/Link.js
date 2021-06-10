import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'colors';

const StyledLink = styled(ReactLink)`
  color: ${COLORS.GREEN};
  text-decoration: none;
  transition-duration: 200ms;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default Link;
