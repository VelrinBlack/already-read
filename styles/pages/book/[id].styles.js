import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.darkGrey};

  @media (min-width: 1366px) {
    display: grid;
    grid-template-columns: 900px 1fr;
    grid-template-rows: 1fr 150px;
    height: 100%;
    padding: 0;

    .logo {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      align-self: self-start;
      margin: 40px 0 0 50px;
    }
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1000px 1fr;
  }

  @media (min-width: 2560px) {
    grid-template-columns: 1450px 1fr;
    grid-template-rows: 1fr 200px;

    .logo {
      margin: 50px 0 0 60px;
    }
  }

  .book-cover-container {
    position: relative;
    width: 200px;
    margin-top: 40px;
    aspect-ratio: 1 / 1.42;
    z-index: 1;

    @media (min-width: 768px) {
      width: 250px;
      margin-top: 60px;
    }

    @media (min-width: 1366px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      align-self: self-start;
      margin: 153px 0 0 50px;
      width: 300px;
    }

    @media (min-width: 1920px) {
      width: 450px;
    }

    @media (min-width: 2560px) {
      width: 600px;
      margin: 211px 0 0 80px;
    }

    img {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  .first-background {
    position: relative;
    bottom: 100px;

    width: 100%;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.yellow};

    @media (min-width: 1366px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      align-self: self-start;
      bottom: 0;
      margin-top: 103px;

      border-top-right-radius: ${({ theme }) => theme.borderRadius};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius};

      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 75px 50px 50px 425px;
    }

    @media (min-width: 1920px) {
      padding: 75px 50px 50px 575px;
    }

    @media (min-width: 2560px) {
      padding: 115px 80px 80px 795px;
      margin-top: 131px;
    }

    .title {
      min-width: 250px;
      max-width: 400px;
      margin: 130px 100px 50px 100px;
      text-align: center;
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.M};
      color: ${({ theme }) => theme.color.darkGrey};
      font-weight: bold;

      @media (min-width: 768px) {
        min-width: initial;
        max-width: initial;
        width: 600px;
        margin: 140px 0 60px 0;
        font-size: ${({ theme }) => theme.fontSize.L};
      }

      @media (min-width: 1366px) {
        position: relative;
        margin: 0;
        text-align: start;
        z-index: 1;
        width: 100%;

        &::before {
          content: '';
          display: block;
          position: absolute;
          left: -25px;
          top: -25px;
          width: 90px;
          height: 90px;
          background-color: ${({ theme }) => theme.color.white};
          border-radius: ${({ theme }) => theme.borderRadius};
          z-index: -1;
        }
      }

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.XL};

        &::before {
          left: -35px;
          top: -35px;
          width: 120px;
          height: 120px;
        }
      }
    }

    .info-container {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 35px;
      display: flex;
      justify-content: space-between;

      transform: translateY(50%);

      @media (min-width: 768px) {
        height: 50px;
      }

      @media (min-width: 1366px) {
        position: static;
        flex-direction: column;
        height: auto;
        transform: none;
        margin-top: 30px;
      }

      @media (min-width: 2560px) {
        margin-top: 50px;
      }

      .price-container,
      .condition-container {
        width: calc((100% - 200px) / 2);

        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.darkGrey};

        @media (min-width: 768px) {
          width: 120px;
        }

        @media (min-width: 1366px) {
          width: fit-content;
          background-color: transparent;
        }
      }

      .price-container {
        display: flex;
        justify-content: center;
        align-items: center;

        border-top-right-radius: ${({ theme }) => theme.borderRadius};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius};

        p {
          font-size: ${({ theme }) => theme.fontSize.S};
          font-family: ${({ theme }) => theme.fontFamily.primary};
          font-weight: bold;

          @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.M};
          }

          @media (min-width: 1366px) {
            font-size: ${({ theme }) => theme.fontSize.S};

            &::before {
              content: 'Price: ';
              font-size: ${({ theme }) => theme.fontSize.XS};
              font-weight: normal;
            }
          }

          @media (min-width: 2560px) {
            font-size: ${({ theme }) => theme.fontSize.M};

            &::before {
              font-size: ${({ theme }) => theme.fontSize.S};
            }
          }
        }
      }

      .condition-container {
        display: flex;
        align-items: center;

        border-top-left-radius: ${({ theme }) => theme.borderRadius};
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius};

        @media (min-width: 1366px) {
          margin-top: 3px;
        }

        .condition {
          display: flex;
          flex-direction: column;
          margin-left: 8px;
          font-size: ${({ theme }) => theme.fontSize.XXXS};
          font-family: ${({ theme }) => theme.fontFamily.primary};

          @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.XXS};
            margin-left: 12px;
          }

          @media (min-width: 1366px) {
            display: block;
            margin: 0;

            span:first-child {
              font-size: ${({ theme }) => theme.fontSize.XS};
            }
            span:nth-child(2) {
              font-size: ${({ theme }) => theme.fontSize.S};
            }
          }

          @media (min-width: 2560px) {
            span:first-child {
              font-size: ${({ theme }) => theme.fontSize.S};
            }
            span:nth-child(2) {
              font-size: ${({ theme }) => theme.fontSize.M};
            }
          }

          span:nth-child(2) {
            font-weight: bold;
          }
        }
      }
    }

    .favourite-button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      width: fit-content;
      height: 100%;
      padding: 0 15px;
      font-size: ${({ theme }) => theme.fontSize.XXXS};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.XS};
        padding: 0 25px;
      }

      @media (min-width: 1366px) {
        position: initial;
        transform: none;

        height: 45px;
        margin-top: 25px;
        background-color: ${({ theme }) => theme.color.yellow};
        border-color: ${({ theme }) => theme.color.darkGrey};
        color: ${({ theme }) => theme.color.darkGrey};
      }

      @media (min-width: 2560px) {
        height: 55px;
        font-size: ${({ theme }) => theme.fontSize.S};
        margin-top: 40px;
      }
    }
  }

  .description {
    position: relative;
    bottom: 40px;
    max-width: 500px;
    margin: 0 30px;

    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.XXS};
    line-height: 150%;

    @media (min-width: 768px) {
      bottom: 20px;
      max-width: 750px;
      margin: 0 80px;
      font-size: ${({ theme }) => theme.fontSize.XS};
    }

    @media (min-width: 1366px) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      align-self: self-start;
      bottom: 0;
      margin: 153px 50px 0 50px;
      max-width: 600px;
    }

    @media (min-width: 2560px) {
      margin: 211px 0 0 80px;
      font-size: ${({ theme }) => theme.fontSize.S};
    }
  }

  .second-background {
    width: 100%;
    background-color: ${({ theme }) => theme.color.yellow};
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin: 40px 0 20px 0;
    }

    @media (min-width: 1366px) {
      display: none;
    }

    .contact-info {
      margin: 35px 30px;

      display: flex;

      @media (min-width: 768px) {
        margin: 35px 80px;
        justify-content: center;
      }

      .profile-image-container {
        position: relative;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        box-shadow: 0 0 15px ${({ theme }) => theme.color.lightGrey};

        img {
          border-radius: 100%;
          object-fit: cover;
        }
      }

      .text-container {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name,
        .email {
          font-family: ${({ theme }) => theme.fontFamily.primary};
        }

        .name {
          font-size: ${({ theme }) => theme.fontSize.M};
          color: ${({ theme }) => theme.color.darkGrey};
        }

        .email {
          margin-top: 3px;
          font-size: ${({ theme }) => theme.fontSize.XS};
          color: ${({ theme }) => theme.color.lightGrey};
        }
      }
    }
  }

  .desktop-seller-info {
    display: none;

    grid-row: 2 / 3;
    grid-column: 2 / 3;
    align-self: self-start;
    justify-self: self-end;

    height: 100px;
    margin-right: 50px;

    @media (min-width: 1366px) {
      display: flex;
    }

    @media (min-width: 2560px) {
      height: 140px;
      margin-right: 80px;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 5px;

      text-align: end;
      color: ${({ theme }) => theme.color.white};
      font-family: ${({ theme }) => theme.fontFamily.primary};

      @media (min-width: 2560px) {
        padding-bottom: 10px;
      }

      .name {
        font-size: ${({ theme }) => theme.fontSize.L};
        font-weight: bold;

        @media (min-width: 2560px) {
          font-size: ${({ theme }) => theme.fontSize.XL};
        }
      }

      .email {
        font-size: ${({ theme }) => theme.fontSize.XS};
        margin-top: 5px;

        @media (min-width: 2560px) {
          font-size: ${({ theme }) => theme.fontSize.S};
          margin-top: 10px;
        }
      }
    }

    .profile-image-container {
      position: relative;
      width: 100px;
      height: 100px;
      margin-left: 25px;
      border-radius: 100%;
      box-shadow: 0 0 15px ${({ theme }) => theme.color.lightGrey};

      @media (min-width: 2560px) {
        width: 140px;
        height: 140px;
      }

      img {
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default StyledWrapper;
