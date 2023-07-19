import StyledWrapper from './MultiUseSection.styles';
import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import profileIcon from 'images/profile.svg';
import UserContext from 'UserContext';
import Button from 'components/atoms/Button/Button';
import LogInSignUpForm from 'components/molecules/LogInSignUpForm/LogInSignUpForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import strings from 'strings.json';

const MultiUseSection = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [formType, setFormType] = useState('login');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (user) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profileImage/${user.email}`,
        method: 'GET',
        responseType: 'blob',
      })
        .then((res) => {
          setProfileImage(res.data);
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.invalidCredentials) {
            router.push('/');
          }
        });
    }
  }, [user, router]);

  return (
    <StyledWrapper user={user}>
      {user ? ( // this appears only on bigger screens
        <>
          <div className='container'>
            <div className='image-shadow'>
              <div className='image-container'>
                {profileImage ? (
                  <Image
                    src={URL.createObjectURL(profileImage)}
                    layout='fill'
                    alt='profile image'
                  />
                ) : (
                  <Image src={profileIcon} layout='fill' alt='profile icon' />
                )}
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
                content='My account'
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
                content="Let's get started!"
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
