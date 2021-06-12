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

const StyledLoaderContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.addStyle}
`;

const StyledLoader = styled.div`
  display: inline-block;
  width: ${(props) => props.width || '1.8em'};
  height: ${(props) => props.height || '1.8em'};
  border: 0.25em solid ${(props) => (props.color ? props.color : COLORS.WHITE)};
  animation: ${LoaderAnimation} 2s infinite ease;
  ${(props) => props.addStyle}
`;

const StyledLoaderInner = styled.div`
  background-color: ${(props) =>
    props.colorInner ? props.colorInner : COLORS.WHITE};
  animation: ${LoaderInnerAnimation} 2s infinite ease-in;
`;

const Loader = ({ width, height, color, colorInner, inButton, addStyle }) => {
  return (
    <>
      {inButton ? (
        <StyledLoaderContainer addStyle={addStyle}>
          <StyledLoader width={width} height={height} color={color}>
            <StyledLoaderInner colorInner={colorInner} />
          </StyledLoader>
        </StyledLoaderContainer>
      ) : (
        <StyledLoader
          width={width}
          height={height}
          color={color}
          addStyle={addStyle}
        >
          <StyledLoaderInner colorInner={colorInner} />
        </StyledLoader>
      )}
    </>
  );
};

export default Loader;
