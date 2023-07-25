import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};

  .logo-container {
    display: flex;
    justify-content: center;
    padding: 40px 0 30px;
  }

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
      margin-top: 0px;
      aspect-ratio: 1 / 1.42;
      z-index: 1;

      @media (min-width: 768px) {
        width: 250px;
        margin-top: 20px;
      }

      img {
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }
  }
`;

export default StyledWrapper;
