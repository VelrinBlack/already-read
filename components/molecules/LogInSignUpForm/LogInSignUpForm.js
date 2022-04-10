import { useEffect, useState } from 'react';
import StyledWrapper from './LogInSignUpForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import strings from 'strings.json';

const LogInSignUpForm = ({ formType, setFormType }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

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

    // login api request
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

    // register api request
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
