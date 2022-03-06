import styled from 'styled-components';

const StyledWrapper = styled.main`
  height: ${({ viewportHeight }) => viewportHeight + 'px'};
  padding: 40px 30px 10px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.color.darkGrey};

  @media (min-width: 1366px) {
    flex: 1;
    padding: 40px 50px 0 50px;
  }
  @media (min-width: 2560px) {
    padding: 50px 60px 0 60px;
  }

  .logo {
    @media (min-width: 1366px) {
      align-self: flex-start;
    }
  }

  .centered-container {
    .heading {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.L};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.XL};
      }

      .primary {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.fontFamily.primary};
      }
      .secondary {
        color: ${({ theme }) => theme.color.blue};
        font-family: ${({ theme }) => theme.fontFamily.secondary};
      }
    }
  }

  .scroll-down {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;

    cursor: pointer;

    .image-container {
      position: relative;

      width: 40px;
      height: 40px;
    }
  }

  button:nth-child(3) {
    @media (min-width: 1366px) {
      height: 45px;
      visibility: hidden;
    }

    &.my-account-button {
      @media (min-width: 414px) {
        width: 360px;
      }
      @media (min-width: 768px) {
        width: 600px;
      }
    }
  }
`;

export default StyledWrapper;
