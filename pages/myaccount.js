import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import hamburgerIcon from 'images/hamburger.svg';
import GeneralSettingsForm from 'components/organisms/GeneralSettingsForm/GeneralSettingsForm';
import BackIcon from 'images/back.svg';
import Link from 'next/link';

const StyledWrapper = styled.div`
  min-height: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
  }

  .first-section {
    position: sticky;
    top: 0;

    width: 100%;
    padding: 15px 30px;

    background-color: ${({ theme }) => theme.color.darkGrey};
    box-shadow: 0 10px 10px ${({ theme }) => theme.color.darkGrey};

    z-index: 1;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 1366px) {
      width: 202px;
    }
    @media (min-width: 2560px) {
      width: 255px;
    }

    .logo-container {
      padding-top: 25px;
      padding-bottom: 15px;

      display: flex;
      justify-content: center;

      @media (min-width: 1366px) {
        width: fit-content;
      }
      @media (min-width: 2560px) {
        padding-top: 35px;
      }
    }

    .activation-button {
      width: 100%;
      height: 45px;
      margin-top: 15px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.color.yellow};

      cursor: pointer;

      @media (min-width: 768px) {
        width: 500px;
      }

      @media (min-width: 1366px) {
        display: none;
      }

      .image-container {
        width: 100%;
        height: 70%;
        position: relative;
      }
    }
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 40px;
    background-color: ${({ theme }) => theme.color.darkGrey};

    @media (min-width: 1366px) {
      justify-content: center;
      padding: 0;
    }

    .section-title {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.M};
      color: ${({ theme }) => theme.color.white};

      @media (min-width: 1366px) {
        display: none;
      }
    }
  }

  nav {
    display: none;

    width: 202px;
    padding: 45px 40px 0 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${({ theme }) => theme.color.darkGrey};

    @media (min-width: 1366px) {
      display: flex;
    }

    @media (min-width: 2560px) {
      width: 255px;
      padding: 50px 50px 0 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;

      li {
        list-style-type: none;
        text-align: end;
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize.XS};
        margin-top: 15px;

        &:first-of-type {
          margin-top: 0;
        }

        &.active {
          font-size: ${({ theme }) => theme.fontSize.M};
          font-weight: bold;

          &:first-of-type {
            margin-bottom: 5px;
          }

          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin: 20px 0 5px 0;
          }

          &:nth-of-type(4) {
            margin-top: 20px;
          }

          @media (min-width: 2560px) {
            font-size: ${({ theme }) => theme.fontSize.L};
          }
        }

        @media (min-width: 2560px) {
          font-size: ${({ theme }) => theme.fontSize.S};
        }
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 20px;
      margin-bottom: 45px;
      background-color: transparent;
      border: none;

      cursor: pointer;

      @media (min-width: 2560px) {
        height: 30px;
        margin-bottom: 50px;
      }

      .image-container {
        position: relative;
        height: 15px;
        width: 15px;
        margin-bottom: 1px;

        @media (min-width: 2560px) {
          height: 20px;
          width: 20px;
          margin-bottom: 3px;
        }
      }

      p {
        margin-left: 8px;
        color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.fontSize.XS};

        @media (min-width: 2560px) {
          font-size: ${({ theme }) => theme.fontSize.S};
        }
      }
    }
  }
`;

const MyAccount = () => {
  return (
    <StyledWrapper>
      <div className='first-section'>
        <div className='logo-container'>
          <Logo />
        </div>

        <button className='activation-button'>
          <div className='image-container'>
            <Image src={hamburgerIcon} alt='search' layout='fill' />
          </div>
        </button>
      </div>

      <main>
        <h2 className='section-title'>General</h2>

        <GeneralSettingsForm />
      </main>

      <nav>
        <ul>
          <li className='active'>General</li>
          <li>My books</li>
          <li>Messages</li>
          <li>Favourites</li>
        </ul>
        <Link href='/' passHref>
          <button>
            <div className='image-container'>
              <Image src={BackIcon} alt='back' layout='fill' className='backIcon' />
            </div>
            <p>Home page</p>
          </button>
        </Link>
      </nav>
    </StyledWrapper>
  );
};

export default MyAccount;
