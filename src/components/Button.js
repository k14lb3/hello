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
  opacity: ${(props) => props.weird && '0'};
`;

const Button = ({ hasLoader, label, ...rest }) => {
  return (
    <StyledButton hasLoader={hasLoader} {...rest}>
      {hasLoader?.loading && (
        <Loader
          inButton
          size={{ width: '1em', height: '1em' }}
          colorOuter={COLORS.GREEN}
          colorInner={COLORS.GREEN}
        />
      )}
      {hasLoader ? (
        <StyledSpan weird={hasLoader.loading}>{label}</StyledSpan>
      ) : (
        label
      )}
    </StyledButton>
  );
};

export default Button;
