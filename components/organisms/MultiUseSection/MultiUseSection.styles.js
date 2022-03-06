import styled from 'styled-components';

const StyledWrapper = styled.section`
  padding: 60px 30px;

  display: ${({ user }) => (user ? 'none' : 'block')};

  background-color: ${({ theme }) => theme.color.yellow};

  @media (min-width: 768px) {
    padding: 60px 80px;
  }

  @media (min-width: 1366px) {
    width: 370px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 2560px) {
    width: 520px;
    padding: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin-top: 80px;

      @media (min-width: 1366px) {
        margin-top: 0;
      }
    }

    .heading {
      width: 300px;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.M};

      @media (min-width: 1366px) {
        width: auto;
        text-align: start;
      }

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.L};
      }

      .primary {
        color: ${({ theme }) => theme.color.darkGrey};
        font-family: ${({ theme }) => theme.fontFamily.primary};
      }
      .secondary {
        color: ${({ theme }) => theme.color.blue};
        font-family: ${({ theme }) => theme.fontFamily.secondary};
      }
    }

    .register-button {
      margin-top: 25px;

      @media (min-width: 768px) {
        width: 600px;
      }

      @media (min-width: 1366px) {
        width: 100%;
      }

      @media (min-width: 2560px) {
        margin-top: 30px;
      }
    }
  }
`;

export default StyledWrapper;
