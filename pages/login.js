import LogInSignUpForm from 'components/molecules/LogInSignUpForm/LogInSignUpForm';
import { useState, useContext, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';
import StyledWrapper from 'styles/pages/login.style';

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [formType, setFormType] = useState('login');

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  return (
    <StyledWrapper>
      <Logo />
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

        {formType === 'login' && (
          <>
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
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

export default Login;
