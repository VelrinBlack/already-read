import StyledWrapper from './MultiUseSection.styles';
import { useContext, useState } from 'react';
import Image from 'next/image';
import profileIcon from 'images/profile.svg';
import UserContext from 'UserContext';
import Button from 'components/atoms/Button/Button';
import LogInSignUpForm from 'components/molecules/LogInSignUpForm/LogInSignUpForm';
import Link from 'next/link';

const MultiUseSection = () => {
  const { user, setUser } = useContext(UserContext);
  const [formType, setFormType] = useState('login');

  return (
    <StyledWrapper user={user}>
      {user ? ( // this appears only on bigger screens
        <>
          <div className='container'>
            <div className='image-border'>
              <div className='image-container'>
                <Image src={profileIcon} layout='fill' alt='profile picture' />
              </div>
            </div>
            <h2 className='user-name'>{user.name}</h2>
            <p className='user-email'>{user.email}</p>
          </div>
          <div className='container'>
            <h2 className='heading'>
              <span className='primary'>Visit </span>
              <span className='secondary'>your account </span>
              <span className='primary'>to sell a book and more!</span>
            </h2>
            <Link href='/myaccount' passHref>
              <Button
                text='My account'
                textColor='yellow'
                backgroundColor='blue'
                className='my-account-button'
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className='container'>
            <h2 className='heading'>
              {formType === 'login' ? (
                <>
                  <span className='secondary'>Log in </span>
                  <span className='primary'>to access more features!</span>
                </>
              ) : (
                <>
                  <span className='secondary'>Sign up </span>
                  <span className='primary'>in just a few seconds!</span>
                </>
              )}
            </h2>
            <LogInSignUpForm formType={formType} setFormType={setFormType} />
          </div>

          {formType === 'login' && (
            <div className='container'>
              <h2 className='heading'>
                <span className='primary'>Don’t have an account yet? </span>
                <span className='secondary'>Register now!</span>
              </h2>
              <Button
                text="Let's get started!"
                textColor='yellow'
                backgroundColor='blue'
                className='register-button'
                onClick={() => setFormType('signup')}
              />
            </div>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default MultiUseSection;
