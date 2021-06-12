import styled from 'styled-components';
import { COLORS } from 'colors';
import Loader from 'components/Loader';

const StyledButton = styled.button`
  position: ${(props) => props.hasLoader && 'relative'};
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
    opacity: 0.9;
  }
`;

const StyledSpan = styled.span`
  display: ${(props) => (props.loading ? 'none' : 'inline')};
`;

const Button = ({ hasLoader, label, ...rest }) => {
  return (
    <StyledButton hasLoader={hasLoader} {...rest}>
      {hasLoader?.loading && (
        <Loader
          width="1.2em"
          height="1.2em"
          color={COLORS.GREEN}
          colorInner={COLORS.GREEN}
        />
      )}
      {hasLoader ? (
        <StyledSpan loading={hasLoader.loading}>{label}</StyledSpan>
      ) : (
        label
      )}
    </StyledButton>
  );
};

export default Button;
