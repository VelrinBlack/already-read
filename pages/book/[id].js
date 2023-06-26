import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import bookCover from 'images/book_cover.webp';
import profileImage from 'images/profile.svg';
import Button from 'components/atoms/Button/Button';
import phoneIcon from 'images/phone.svg';

const StyledWrapper = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.darkGrey};

  .book-cover-container {
    width: 200px;
    margin-top: 40px;
    z-index: 1;

    img {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  .first-background {
    position: relative;
    bottom: 100px;

    width: 100%;
    height: 250px;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.yellow};

    .title {
      width: 250px;
      margin-top: 125px;
      text-align: center;
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.M};
      color: ${({ theme }) => theme.color.darkGrey};
      font-weight: bold;
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

      .price-container,
      .condition-container {
        width: calc((100% - 200px) / 2);

        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.darkGrey};
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
        }
      }

      .condition-container {
        display: flex;
        align-items: center;

        border-top-left-radius: ${({ theme }) => theme.borderRadius};
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius};

        .condition {
          display: flex;
          flex-direction: column;
          margin-left: 8px;
          font-size: ${({ theme }) => theme.fontSize.XXXS};
          font-family: ${({ theme }) => theme.fontFamily.primary};

          span:nth-child(2) {
            font-weight: bold;
          }
        }
      }
    }
  }

  .description {
    position: relative;
    bottom: 40px;
    margin: 0 20px;

    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.XXS};
    line-height: 150%;
  }

  .second-background {
    width: 100%;
    background-color: ${({ theme }) => theme.color.yellow};
    margin-bottom: 10px;

    .contact-info {
      margin: 35px 20px 0 20px;

      display: flex;

      .profile-image-container {
        position: relative;
        width: 70px;
        height: 70px;
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

    .phone-button {
      margin: 25px 20px 35px 20px;
      width: calc(100% - 40px);

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }
`;

const Book = () => {
  return (
    <StyledWrapper>
      <Logo />
      <div className='book-cover-container'>
        <Image src={bookCover} alt='book cover' />
      </div>
      <div className='first-background'>
        <h2 className='title'>The Chronicks of Narnia</h2>
        <div className='info-container'>
          <div className='price-container'>
            <p className='price'>$ 32</p>
          </div>
          <div className='condition-container'>
            <p className='condition'>
              <span>Condition:</span>
              <span>Used</span>
            </p>
          </div>
        </div>
      </div>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sociis natoque
        penatibus et magnis dis parturient montes nascetur. Pellentesque massa placerat duis
        ultricies. Fusce ut placerat orci nulla. Sed faucibus turpis in eu. Risus quis varius quam
        quisque id diam vel quam elementum. Malesuada fames ac turpis egestas sed tempus urna et.
        Amet venenatis urna cursus eget nunc scelerisque. Pretium vulputate sapien nec sagittis
        aliquam malesuada bibendum. Sed odio morbi quis commodo odio aenean sed adipiscing diam.
        Augue mauris augue neque gravida in fermentum et sollicitudin ac. Elit pellentesque habitant
        morbi tristique senectus et netus et malesuada. Suspendisse sed nisi lacus sed viverra
        tellus in.
      </p>
      <div className='second-background'>
        <div className='contact-info'>
          <div className='profile-image-container'>
            <Image src={profileImage} alt='' layout='fill' />
          </div>
          <div className='text-container'>
            <h2 className='name'>John Doe</h2>
            <p className='email'>johndoe@myemail.com</p>
          </div>
        </div>
        <Button
          className='phone-button'
          backgroundColor='yellow'
          borderColor='blue'
          textColor='blue'
          text={
            <>
              <Image src={phoneIcon} alt='' />
              <span>+10 123 456 789</span>
            </>
          }
        />
      </div>
    </StyledWrapper>
  );
};

export default Book;
