import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import StyledWrapper from './LogInSignUpForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import strings from 'strings.json';
import UserContext from 'UserContext';

const LogInSignUpForm = ({ formType, setFormType }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setLoginEmail('');
    setLoginPassword('');
    setLoginError('');

    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
    setRegisterError('');
  }, [formType]);

  const isEmail = (str) => {
    return str
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const saveUser = ({ name, email, token }) => {
    setUser({
      name,
      email,
      token,
    });

    localStorage.setItem('user_name', name);
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_token', token);
  };

  const handleLoginSubmit = () => {
    if (!loginEmail || !loginPassword) {
      return setLoginError(strings.formError.PARAMETER_MISSING);
    } else {
      setLoginError('');
    }

    if (!isEmail(loginEmail)) {
      return setLoginError(strings.formError.INVALID_EMAIL);
    } else {
      setLoginError('');
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.AUTHENTICATED_SUCCESSFULLY) {
          saveUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response?.data.message === strings.apiResponseMessage.INVALID_CREDENTIALS) {
          setLoginError('Invalid credentials');
        } else {
          setLoginError('Something went wrong');
        }
      });
  };

  const handleRegisterSubmit = () => {
    if (!registerName || !registerEmail || !registerPassword) {
      return setRegisterError(strings.formError.PARAMETER_MISSING);
    } else {
      setRegisterError('');
    }

    if (registerName.length < 2) {
      return setRegisterError(strings.formError.INVALID_NAME);
    } else {
      setRegisterError('');
    }

    if (!isEmail(registerEmail)) {
      return setRegisterError(strings.formError.INVALID_EMAIL);
    } else {
      setRegisterError('');
    }

    if (registerPassword.length < 5) {
      return setRegisterError(strings.formError.TOO_SHORT_PASSWORD);
    } else {
      setRegisterError('');
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register`, {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      })
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.CREATED_SUCCESSFULLY) {
          saveUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response?.data.message === strings.apiResponseMessage.ALREADY_EXISTS) {
          setRegisterError('User already exists');
        } else {
          setRegisterError('Something went wrong');
        }
      });
  };

  return (
    <StyledWrapper onSubmit={(e) => e.preventDefault()} noValidate>
      {formType === 'login' ? (
        <div className='login-container'>
          <Input
            type='email'
            placeholder='Email address'
            value={loginEmail}
            onChange={({ target }) => setLoginEmail(target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            value={loginPassword}
            onChange={({ target }) => setLoginPassword(target.value)}
          />
          <Button
            content='Log in'
            borderColor='blue'
            textColor='blue'
            className='submit'
            onClick={handleLoginSubmit}
          />
          <button className='forgot-pass'>Forgot password?</button>
          {loginError && (
            <div className='error'>
              <span>{loginError}</span>
            </div>
          )}
        </div>
      ) : formType === 'signup' ? (
        <div className='signup-container'>
          <Input
            placeholder='First name'
            value={registerName}
            onChange={({ target }) => setRegisterName(target.value)}
          />
          <Input
            type='email'
            placeholder='Email address'
            value={registerEmail}
            onChange={({ target }) => setRegisterEmail(target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            value={registerPassword}
            onChange={({ target }) => setRegisterPassword(target.value)}
          />
          <Button
            content='Register'
            borderColor='blue'
            textColor='blue'
            className='submit'
            onClick={handleRegisterSubmit}
          />
          <button className='login' onClick={() => setFormType('login')}>
            Sign in instead
          </button>
          {registerError && (
            <div className='error'>
              <span>{registerError}</span>
            </div>
          )}
        </div>
      ) : (
        <p>Something went wrong</p>
      )}
    </StyledWrapper>
  );
};

export default LogInSignUpForm;
