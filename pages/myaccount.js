import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import hamburgerIcon from 'images/hamburger.svg';
import profileIcon from 'images/profile.svg';
import Input from 'components/atoms/Input/Input';
import { useState, useContext, useEffect } from 'react';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 100%;

  display: flex;
  flex-direction: column;

  .top-section {
    position: sticky;
    top: 0;

    width: 100%;
    padding: 15px 30px;

    background-color: ${({ theme }) => theme.color.darkGrey};
    box-shadow: 0 10px 10px ${({ theme }) => theme.color.darkGrey};

    z-index: 1;

    .logo-container {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 15px;

      display: flex;
      justify-content: center;
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

    .section-title {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.M};
      color: ${({ theme }) => theme.color.white};
    }

    .change-image-button {
      position: relative;

      width: 100px;
      height: 100px;
      margin-top: 30px;

      background-color: ${({ theme }) => theme.color.darkGrey};
      box-shadow: 0 0 15px ${({ theme }) => theme.color.lightGrey};
      border-radius: 100%;
      border: none;

      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    form {
      width: 100%;
      padding: 15px 30px;

      label {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize.XXS};
        color: ${({ theme }) => theme.color.white};
      }

      input {
        margin-top: 5px;

        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.color.yellow};

        color: ${({ theme }) => theme.color.white};

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
      }
    }
  }
`;

const MyAccount = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const userName = localStorage.getItem('user_name');
    const userEmail = localStorage.getItem('user_email');

    if (userName && userEmail) {
      setName(userName);
      setEmail(userEmail);
    } else {
      router.push('/');
    }
  }, [user]);

  return (
    <StyledWrapper>
      <div className='top-section'>
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
        <button className='change-image-button'>
          <Image src={profileIcon} layout='fill' alt='profile icon' />
        </button>

        <form>
          <label htmlFor='name'>Name:</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
          />
          <label htmlFor='email'>Email:</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
          />

          <label htmlFor='old-password'>Old password:</label>
          <Input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            id='old-password'
          />
          <label htmlFor='new-password'>New password:</label>
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id='new-password'
          />

          <div className='button-container'>
            <Button
              text='Save changes'
              textColor='yellow'
              backgroundColor='blue'
              className='save-button'
            />
          </div>
        </form>
      </main>
    </StyledWrapper>
  );
};

export default MyAccount;
