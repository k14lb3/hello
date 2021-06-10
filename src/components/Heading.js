import styled from 'styled-components';

const H1 = styled.h1`
  ${(props) => props.addStyle}
`;

const H2 = styled.h2`
  ${(props) => props.addStyle}
`;

const H3 = styled.h3`
  ${(props) => props.addStyle}
`;

const H4 = styled.h4`
  ${(props) => props.addStyle}
`;

const H5 = styled.h5`
  ${(props) => props.addStyle}
`;

const H6 = styled.h6`
  ${(props) => props.addStyle}
`;

const Heading = ({ variant, children, ...rest }) => {
  switch (variant) {
    case 'h6':
      return <H6 {...rest}>{children}</H6>;
    case 'h5':
      return <H5 {...rest}>{children}</H5>;
    case 'h4':
      return <H4 {...rest}>{children}</H4>;
    case 'h3':
      return <H3 {...rest}>{children}</H3>;
    case 'h2':
      return <H2 {...rest}>{children}</H2>;
    case 'h1':
    default:
      return <H1 {...rest}>{children}</H1>;
  }
};

export default Heading;
