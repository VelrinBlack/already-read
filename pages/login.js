import styled from 'styled-components';
import LogInSignUpForm from 'components/molecules/LogInSignUpForm/LogInSignUpForm';
import { useState, useContext, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';

const StyledWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.yellow};

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.color.darkGrey};
  }

  .logo {
    position: absolute;
    top: 40px;

    background-color: ${({ theme }) => theme.color.darkGrey};
    border: 20px solid ${({ theme }) => theme.color.darkGrey};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .container {
    box-sizing: content-box;
    width: 90%;

    background-color: ${({ theme }) => theme.color.yellow};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (min-width: 768px) {
      width: 400px;
      padding: 70px;
    }

    @media (min-width: 1366px) {
      width: 500px;
      padding: 80px;
    }

    @media (min-width: 2560px) {
      width: 600px;
      padding: 100px;
    }

    .heading {
      width: 100%;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.M};

      @media (min-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSize.L};
      }

      &:nth-child(3) {
        margin-top: 50px;

        @media (min-width: 768px) {
          width: 90%;
          margin-left: 5%;
        }
        @media (min-width: 2560px) {
          margin-top: 70px;
        }
      }

      .primary {
        color: ${({ theme }) => theme.color.darkGrey};
        font-family: ${({ theme }) => theme.fontFamily.primary};
      }

      .secondary {
        color: ${({ theme }) => theme.color.blue};
        font-family: ${({ theme }) => theme.fontFamily.secondary};
      }
    }

    form {
      width: 100%;
      margin-top: 30px;
    }

    .register-button {
      margin-top: 25px;
    }
  }
`;

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
