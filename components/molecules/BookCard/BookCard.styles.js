import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;

  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.yellow};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;

  @media (min-width: 414px) {
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    width: 600px;
    margin-top: 20px;
  }

  @media (min-width: 1366px) {
    width: 740px;
  }

  @media (min-width: 1920px) {
    margin-top: 25px;
  }

  .image-container {
    background-color: white;

    width: 75px;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: -2px 0 -2px -2px;

    @media (min-width: 414px) {
      width: 85px;
    }

    @media (min-width: 768px) {
      width: 90px;
    }

    @media (min-width: 1920px) {
      width: 100px;
    }
  }

  .content-container {
    flex: 1;

    .title {
      margin: 15px 0 0 15px;

      font-size: ${({ theme }) => theme.fontSize.XS};
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-weight: bold;
      color: ${({ theme }) => theme.color.white};

      @media (min-width: 768px) {
        margin: 20px 0 0 20px;
        font-size: ${({ theme }) => theme.fontSize.S};
      }

      @media (min-width: 1920px) {
        font-size: ${({ theme }) => theme.fontSize.M};
      }
    }

    .middle-container {
      margin: 10px 0 0 15px;

      @media (min-width: 768px) {
        margin: 15px 0 0 20px;
      }

      p {
        color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.fontSize.XXXS};

        @media (min-width: 768px) {
          font-size: ${({ theme }) => theme.fontSize.XXS};
        }

        @media (min-width: 1920px) {
          font-size: ${({ theme }) => theme.fontSize.XS};
        }
      }
    }

    .bottom-container {
      margin: 15px;

      display: grid;
      grid-template-rows: 23px;
      grid-template-columns: 38px 1fr 23px;

      @media (min-width: 414px) {
        grid-template-rows: 27px;
        grid-template-columns: 45px 1fr 27px;
      }

      @media (min-width: 768px) {
        margin: 20px;
        grid-template-rows: 30px;
        grid-template-columns: 45px 1fr 120px;
      }

      @media (min-width: 1920px) {
        grid-template-rows: 35px;
        grid-template-columns: 50px 1fr 150px;
      }

      .price-container {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.color.white};
        border-radius: ${({ theme }) => theme.borderRadius};

        .price {
          font-size: ${({ theme }) => theme.fontSize.XXS};
          font-family: ${({ theme }) => theme.fontFamily.primary};
          font-weight: bold;

          @media (min-width: 1920px) {
            font-size: ${({ theme }) => theme.fontSize.XS};
          }
        }
      }

      .like-button {
        grid-column: 3 / 4;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.color.blue};
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius};

        .like-text {
          font-size: ${({ theme }) => theme.fontSize.XXXS};
          font-family: ${({ theme }) => theme.fontFamily.primary};
          font-weight: bold;
          color: ${({ theme }) => theme.color.white};

          @media (min-width: 1920px) {
            font-size: ${({ theme }) => theme.fontSize.XXS};
          }
        }

        .like-image-container {
          position: relative;

          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

export default StyledWrapper;
