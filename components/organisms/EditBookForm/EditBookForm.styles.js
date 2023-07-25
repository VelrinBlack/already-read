import styled from 'styled-components';

const StyledWrapper = styled.form`
  .background-container {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;

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
    }

    .book-cover-container {
      position: relative;
      width: 200px;
      margin-top: 20px;
      aspect-ratio: 1 / 1.42;
      z-index: 1;

      @media (min-width: 768px) {
        width: 250px;
        margin-top: 30px;
      }

      img {
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

    label {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.XXS};
      color: ${({ theme }) => theme.color.white};
    }

    input {
      margin: 5px 0 12px 0;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.white};
    }

    .double-input-container {
      display: flex;

      .pair-container {
        flex: 1;

        &:first-child {
          margin-right: 15px;
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

      outline: none;
      resize: vertical;

      @media (min-width: 768px) {
        height: 200px;
        min-height: 150px;
      }

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }
  }

  .buttons-container {
    display: flex;
    padding: 45px 30px 20px 30px;

    @media (min-width: 768px) {
      padding: 45px 0 20px 0;
      margin: 0 auto;
      width: 600px;
    }

    button:first-child {
      margin-right: 15px;
    }
  }
`;

export default StyledWrapper;
