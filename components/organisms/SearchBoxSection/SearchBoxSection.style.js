import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 15px 30px;

  box-shadow: 0 10px 10px ${({ theme }) => theme.color.darkGrey};

  @media (min-width: 768px) {
    padding: 30px 0;

    display: flex;
    justify-content: center;
  }

  @media (min-width: 2560px) {
    padding: 50px 0;
    box-shadow: 0 14px 14px ${({ theme }) => theme.color.darkGrey};
  }

  form {
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-template-rows: repeat(2, 45px);
    grid-gap: 5px;

    @media (min-width: 768px) {
      width: 600px;
      grid-template-columns: repeat(2, 1fr) 45px;
      grid-template-rows: 45px;
      grid-gap: 10px;
    }

    @media (min-width: 2560px) {
      width: 740px;
      grid-template-columns: repeat(2, 1fr) 55px;
      grid-template-rows: 55px;
      grid-gap: 15px;
    }

    input,
    button {
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    input {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.XS};
      font-family: ${({ theme }) => theme.fontFamily.primary};
      outline: none;

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }

    button {
      grid-row: 1 / 3;
      grid-column: 2 / 3;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.color.yellow};

      cursor: pointer;

      @media (min-width: 768px) {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }
    }
  }

  .activation-button {
    width: 100%;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.color.yellow};

    cursor: pointer;
  }

  .image-container {
    position: relative;
    width: 24px;
    height: 24px;

    @media (min-width: 2560px) {
      width: 27px;
      height: 27px;
    }
  }
`;

export default StyledWrapper;
