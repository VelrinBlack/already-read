import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.darkGrey};

  main {
    flex: 1;

    .top-section {
      position: sticky;
      top: 0;

      background-color: ${({ theme }) => theme.color.darkGrey};

      z-index: 1;

      .logo-container {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 15px;

        display: flex;
        justify-content: center;

        @media (min-width: 768px) {
          padding-bottom: 0;
        }

        @media (min-width: 2560px) {
          padding-top: 50px;
        }
      }
    }

    .error {
      margin-top: 30px;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.XS};
      color: ${({ theme }) => theme.color.white};

      @media (min-width: 1920px) {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }

    .button-container {
      position: fixed;
      bottom: 10px;

      width: 100%;
      padding: 0 30px;

      box-shadow: 0 0 10px 10px #31393c;

      @media (min-width: 768px) {
        width: 100%;
        margin: 0;

        display: flex;
        justify-content: center;
      }

      @media (min-width: 1366px) {
        visibility: hidden;
      }

      .my-account-button {
        @media (min-width: 768px) {
          width: 600px;
        }

        @media (min-width: 1366px) {
          width: 740px;
        }
      }
    }
  }

  section {
    display: none;

    @media (min-width: 1366px) {
      display: flex;
    }
  }
`;

export default StyledWrapper;
