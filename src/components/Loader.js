import styled, { keyframes } from 'styled-components';
import { COLORS } from 'colors';

const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderInnerAnimation = keyframes`
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
`;

const StyledLoader = styled.span`
  display: inline-block;
  width: 1.8em;
  height: 1.8em;
  position: relative;
  border: 4px solid ${(props) => (props.color ? props.color : COLORS.WHITE)};
  top: 50%;
  animation: ${LoaderAnimation} 2s infinite ease;
  ${(props) => props.addStyle}
`;

const StyledLoaderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: ${(props) =>
    props.colorInner ? props.colorInner : COLORS.WHITE};
  animation: ${LoaderInnerAnimation} 2s infinite ease-in;
`;

const Loader = ({ color, colorInner, ...rest }) => {
  return (
    <StyledLoader color={color} {...rest}>
      <StyledLoaderInner colorInner={colorInner} />
    </StyledLoader>
  );
};

export default Loader;
