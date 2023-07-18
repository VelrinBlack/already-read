import styled from 'styled-components';

const StyledWrapper = styled.section`
  padding: 60px 30px;

  display: ${({ user }) => (user ? 'none' : 'block')};

  background-color: ${({ theme }) => theme.color.yellow};

  z-index: 2;

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

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1366px) {
      position: sticky;
      top: 30px;
    }

    @media (min-width: 2560px) {
      top: 50px;
    }

    &:nth-child(2) {
      margin-top: 60px;

      @media (min-width: 1366px) {
        margin-top: 0;

        position: sticky;
        bottom: 30px;
      }

      @media (min-width: 2560px) {
        bottom: 50px;
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

    .register-button,
    .my-account-button {
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

    .image-shadow {
      width: 110px;
      height: 110px;

      box-shadow: 0 0 15px ${({ theme }) => theme.color.lightGrey};
      border-radius: 100%;

      @media (min-width: 2560px) {
        width: 170px;
        height: 170px;

        padding: 5px;
      }

      .image-container {
        position: relative;
        width: 100%;
        height: 100%;

        img {
          border-radius: 100%;
          object-fit: cover;
        }
      }
    }

    .user-name {
      margin-top: 15px;

      font-size: ${({ theme }) => theme.fontSize.M};
      font-family: ${({ theme }) => theme.fontFamily.primary};
      color: ${({ theme }) => theme.color.darkGrey};

      @media (min-width: 2560px) {
        margin-top: 20px;
        font-size: ${({ theme }) => theme.fontSize.L};
      }
    }

    .user-email {
      margin-top: 3px;

      font-size: ${({ theme }) => theme.fontSize.S};
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      color: ${({ theme }) => theme.color.lightGrey};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.M};
      }
    }
  }
`;

export default StyledWrapper;
