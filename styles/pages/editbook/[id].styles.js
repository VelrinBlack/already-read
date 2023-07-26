import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};
  min-height: 100%;

  .logo-container {
    display: flex;
    justify-content: center;
    padding: 40px 0 30px;

    @media (min-width: 1366px) {
      padding: 40px 0 80px;
    }

    @media (min-width: 1920px) {
      display: block;
      padding: 40px 0 120px 50px;
    }

    @media (min-width: 2560px) {
      padding: 50px 0 180px 60px;
    }
  }
`;

export default StyledWrapper;
