import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 100%;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 500px;
    padding: 0;
  }

  @media (min-width: 1366px) {
    width: 900px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 250px repeat(2, 68px);
    grid-column-gap: 90px;
    grid-row-gap: 15px;
    justify-items: center;
    align-items: end;
  }

  @media (min-width: 2560px) {
    grid-template-rows: 280px repeat(2, 82px);
    grid-row-gap: 20px;
  }

  .change-image-button {
    position: relative;

    width: 100px;
    height: 100px;
    margin: 30px 0 20px 0;

    background-color: ${({ theme }) => theme.color.darkGrey};
    box-shadow: 0 0 15px ${({ theme }) => theme.color.lightGrey};
    border-radius: 100%;
    border: none;

    cursor: pointer;

    @media (min-width: 1366px) {
      width: 140px;
      height: 140px;
      margin: 0;
      grid-column: 1 / 3;
      align-self: center;
    }

    @media (min-width: 2560px) {
      width: 160px;
      height: 160px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  label {
    align-self: flex-start;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.XXS};
    color: ${({ theme }) => theme.color.white};

    @media (min-width: 1366px) {
      justify-self: start;

      &:first-of-type {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      &:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      &:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      &:nth-of-type(4) {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
    }

    @media (min-width: 2560px) {
      font-size: ${({ theme }) => theme.fontSize.XS};
    }
  }

  input {
    margin-top: 5px;

    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.color.yellow};

    color: ${({ theme }) => theme.color.white};

    @media (min-width: 1366px) {
      margin: 0 !important;

      &:first-of-type {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      &:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      &:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      &:nth-of-type(4) {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
    }

    &#name,
    &#old-password {
      margin-bottom: 12px;
    }

    &#email {
      margin-bottom: 50px;
    }
  }

  .button-container {
    position: fixed;
    bottom: 10px;
    left: 0;

    width: 100%;
    padding: 0 30px;

    box-shadow: 0 0 10px 10px #31393c;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
      padding: 0;
      width: 500px;
    }

    @media (min-width: 1366px) {
      position: relative;
      bottom: auto;
      left: auto;
      transform: none;

      grid-column: 1 / 3;
      width: 100%;
      padding: 0;
      margin-top: 30px;

      box-shadow: none;
    }
  }
`;

export default StyledWrapper;
