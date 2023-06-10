import styled from 'styled-components';
import Link from 'next/link';

const StyledWrapper = styled.div`
  cursor: pointer;

  span {
    font-size: ${({ theme }) => theme.fontSize.S};

    @media (min-width: 2560px) {
      font-size: ${({ theme }) => theme.fontSize.M};
    }

    &:first-child {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
    }
    &:last-child {
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

const Logo = (...props) => (
  <Link href='/' passHref>
    <StyledWrapper className='logo' {...props}>
      <span>Already</span>
      <span>Read</span>
    </StyledWrapper>
  </Link>
);

export default Logo;
