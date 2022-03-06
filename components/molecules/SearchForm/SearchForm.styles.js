import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .inputs-container {
    width: 100%;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 414px) {
      width: 360px;
    }

    @media (min-width: 768px) {
      width: 600px;

      flex-direction: row;
      justify-content: space-between;

      input:first-child {
        width: 350px;
      }
      input:last-child {
        width: 200px;
      }
    }

    @media (min-width: 2560px) {
      width: 740px;
      margin-top: 50px;

      input:first-child {
        width: 430px;
      }
      input:last-child {
        width: 240px;
      }
    }

    p {
      margin: 15px 0;

      color: ${({ theme }) => theme.color.white};
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.XS};

      @media (min-width: 768px) {
        margin: 0;
      }

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }
  }

  button {
    width: 180px;
    margin-top: 40px;

    @media (min-width: 414px) {
      width: 200px;
    }

    @media (min-width: 2560px) {
      width: 245px;
      margin-top: 50px;
    }
  }
`;

export default StyledWrapper;
