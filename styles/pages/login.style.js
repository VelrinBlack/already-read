import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.yellow};

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.color.darkGrey};
  }

  .logo {
    position: absolute;
    top: 40px;

    background-color: ${({ theme }) => theme.color.darkGrey};
    border: 20px solid ${({ theme }) => theme.color.darkGrey};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .container {
    box-sizing: content-box;
    width: 90%;

    background-color: ${({ theme }) => theme.color.yellow};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (min-width: 768px) {
      width: 400px;
      padding: 70px;
    }

    @media (min-width: 1366px) {
      width: 500px;
      padding: 80px;
    }

    @media (min-width: 2560px) {
      width: 600px;
      padding: 100px;
    }

    .heading {
      width: 100%;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.M};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.L};
      }

      &:nth-child(3) {
        margin-top: 50px;

        @media (min-width: 768px) {
          width: 90%;
          margin-left: 5%;
        }
        @media (min-width: 2560px) {
          margin-top: 70px;
        }
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

    form {
      width: 100%;
      margin-top: 30px;
    }

    .register-button {
      margin-top: 25px;
    }
  }
`;

export default StyledWrapper;
