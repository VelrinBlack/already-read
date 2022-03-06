import StyledWrapper from './MultiUseSection.styles';
import { useContext, useState } from 'react';
import UserContext from 'UserContext';
import Button from 'components/atoms/Button/Button';
import LogInSignUpForm from 'components/molecules/LogInSignUpForm/LogInSignUpForm';

const MultiUseSection = () => {
  const { user, setUser } = useContext(UserContext);
  const [formType, setFormType] = useState('login');

  return (
    <StyledWrapper user={user}>
      {user ? ( // this appears only on screens bigger than 1366px
        <Button
          text='My account'
          textColor='yellow'
          backgroundColor='blue'
          className='my-account-button'
        />
      ) : (
        <>
          <div>
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
            <div>
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
