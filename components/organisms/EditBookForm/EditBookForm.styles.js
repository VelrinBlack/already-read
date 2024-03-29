import styled from 'styled-components';

const StyledWrapper = styled.form`
  @media (min-width: 1366px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    position: relative;
    width: 1196.9px;
    margin: auto;
  }

  @media (min-width: 2560px) {
    width: 1266.19px;
  }

  .background-container {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;

    @media (min-width: 1366px) {
      width: auto;
      margin-right: 40px;
    }

    @media (min-width: 2560px) {
      margin-right: 50px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      width: 100%;
      height: 80px;
      background-color: ${({ theme }) => theme.color.yellow};

      @media (min-width: 768px) {
        height: 100px;
      }

      @media (min-width: 1366px) {
        display: none;
      }
    }

    .change-cover-button {
      position: relative;
      width: 200px;
      margin-top: 20px;
      aspect-ratio: 1 / 1.42;
      z-index: 1;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};

      @media (min-width: 768px) {
        width: 250px;
        margin-top: 30px;
      }

      @media (min-width: 1366px) {
        margin-top: 0;
        height: 308px;
        width: auto;
      }

      @media (min-width: 2560px) {
        height: 378px;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0;
        cursor: pointer;

        &:disabled {
          cursor: auto;
        }
      }

      img {
        z-index: 1;
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }
  }

  .fields-container {
    margin: 40px 30px 0 30px;

    @media (min-width: 768px) {
      margin: 40px auto 0 auto;
      width: 600px;
    }

    @media (min-width: 1366px) {
      margin: 0;
      width: auto;
      display: flex;
      height: fit-content;

      .flex-container:first-child {
        width: 400px;
      }

      .flex-container:nth-child(2) {
        width: 500px;
        margin-left: 40px;

        display: flex;
        flex-direction: column;
      }
    }

    @media (min-width: 2560px) {
      .flex-container:nth-child(2) {
        margin-left: 50px;
      }
    }

    label {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.XXS};
      color: ${({ theme }) => theme.color.white};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.XS};
      }
    }

    input {
      margin: 5px 0 12px 0;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.white};

      &:disabled {
        opacity: 1;
      }

      @media (min-width: 768px) {
        text-align: start;
        padding: 12px;
      }

      @media (min-width: 2560px) {
        margin: 8px 0 18px 0;
        padding: 15px;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }
    }

    .double-input-container {
      display: flex;

      @media (min-width: 1366px) {
        flex-direction: column;
      }

      .pair-container {
        flex: 1;

        &:first-child {
          margin-right: 15px;

          @media (min-width: 1366px) {
            margin-right: 0;
          }
        }

        select {
          display: block;
          width: 100%;
          height: 45px;
          margin-top: 5px;

          background-color: ${({ theme }) => theme.color.darkGrey};
          border: 2px solid ${({ theme }) => theme.color.yellow};
          border-radius: ${({ theme }) => theme.borderRadius};

          text-align-last: center;
          font-size: ${({ theme }) => theme.fontSize.XS};
          font-family: ${({ theme }) => theme.fontFamily.primary};
          color: ${({ theme }) => theme.color.white};

          outline: none;

          -webkit-appearance: none;
          -moz-appearance: none;

          &::-ms-expand {
            display: none;
          }

          &:disabled {
            opacity: 1;
          }

          @media (min-width: 768px) {
            text-align-last: start;
            padding: 12px;
          }

          @media (min-width: 2560px) {
            height: 55px;
            font-size: ${({ theme }) => theme.fontSize.S};
            padding: 15px;
          }
        }
      }
    }

    textarea {
      width: 100%;
      height: 150px;
      min-height: 100px;
      margin-top: 5px;
      padding: 12px;

      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.color.yellow};
      border-radius: ${({ theme }) => theme.borderRadius};

      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.XS};
      color: ${({ theme }) => theme.color.white};
      line-height: 150%;

      outline: none;
      resize: vertical;

      &:disabled {
        opacity: 1;
      }

      @media (min-width: 768px) {
        height: 200px;
        min-height: 150px;
        line-height: 170%;
      }

      @media (min-width: 1366px) {
        flex: 1;
      }

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.S};
        margin-top: 8px;
        padding: 15px;
      }
    }
  }

  .error,
  .success {
    min-height: 45px;
    margin: 20px 30px 0;
    padding: 12px 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(to left, #ff0000, #ed0000, #da0000, #c90000, #b70000);
    background-size: 200% 200%;
    border-radius: ${({ theme }) => theme.borderRadius};

    color: ${({ theme }) => theme.color.white};
    animation: backgroundMovement 1s infinite alternate;

    @keyframes backgroundMovement {
      from {
        background-position: 0 0;
      }
      to {
        background-position: 100% 100%;
      }
    }

    @media (min-width: 768px) {
      width: 600px;
      margin: 20px auto 0;
    }
    @media (min-width: 1366px) {
      &.mobile {
        display: none;
      }
      &.desktop {
        display: flex !important;
      }
    }
    @media (min-width: 2560px) {
      min-height: 55px;
    }

    &.success {
      background-image: linear-gradient(90deg, rgba(91, 125, 30, 1) 0%, rgba(122, 164, 27, 1) 100%);
    }

    &.desktop {
      display: none;
      width: 100%;
      margin-top: 30px;
    }

    span {
      text-align: center;
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.XS};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }
  }

  .buttons-container {
    display: flex;
    padding: 40px 30px 20px 30px;

    @media (min-width: 768px) {
      padding: 40px 0 20px 0;
      margin: 0 auto;
      width: 600px;
    }

    @media (min-width: 1366px) {
      width: 100%;
      padding: 0;
      margin-top: 20px;

      display: flex;
      justify-content: flex-end;

      button {
        width: 180px;
      }
    }

    @media (min-width: 2560px) {
      button {
        width: 210px;
      }
    }

    button:first-child {
      margin-right: 15px;
    }
  }
`;

export default StyledWrapper;
