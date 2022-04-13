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

  const saveUser = ({ name, email, password }) => {
    setUser({
      name,
      email,
      password,
    });

    localStorage.setItem('user_name', name);
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', password);
  };

  const handleLoginSubmit = () => {
    if (!loginEmail || !loginPassword) {
      return setLoginError(strings.formError.parameterMissing);
    } else {
      setLoginError('');
    }

    if (!isEmail(loginEmail)) {
      return setLoginError(strings.formError.invalidEmail);
    } else {
      setLoginError('');
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.authenticatedSuccessfully) {
          saveUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response?.data.message === strings.apiResponseMessage.invalidCredentials) {
          setLoginError('Invalid credentials');
        } else {
          setLoginError('Something went wrong');
        }
      });
  };

  const handleRegisterSubmit = () => {
    if (!registerName || !registerEmail || !registerPassword) {
      return setRegisterError(strings.formError.parameterMissing);
    } else {
      setRegisterError('');
    }

    if (registerName.length < 2) {
      return setRegisterError(strings.formError.invalidName);
    } else {
      setRegisterError('');
    }

    if (!isEmail(registerEmail)) {
      return setRegisterError(strings.formError.invalidEmail);
    } else {
      setRegisterError('');
    }

    if (registerPassword.length < 5) {
      return setRegisterError(strings.formError.tooShortPassword);
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
        if (res.data.message === strings.apiResponseMessage.createdSuccessfully) {
          saveUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response?.data.message === strings.apiResponseMessage.alreadyExists) {
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
            text='Log in'
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
            text='Register'
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
