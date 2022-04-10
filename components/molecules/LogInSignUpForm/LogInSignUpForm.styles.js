import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 100%;
  margin-top: 25px;

  @media (min-width: 768px) {
    width: 600px;

    .submit {
      width: 200px;
    }
  }

  @media (min-width: 1366px) {
    width: 100%;

    .submit {
      width: auto;
    }
  }

  @media (min-width: 2560px) {
    margin-top: 30px;
  }

  .login-container {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;

    input {
      grid-column: 1 / 3;
    }
  }

  .signup-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;

    input {
      grid-column: 1 / 3;
    }
  }

  .forgot-pass,
  .login {
    padding: 0;

    justify-self: end;
    align-self: start;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.XXS};

    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 2560px) {
      font-size: ${({ theme }) => theme.fontSize.XS};
    }
  }

  .error {
    grid-column: 1 / 3;

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
  }
`;

export default StyledWrapper;
