import StyledWrapper from './LogInSignUpForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const LogInSignUpForm = ({ formType, setFormType }) => {
  return (
    <StyledWrapper onSubmit={(e) => e.preventDefault()} noValidate>
      {formType === 'login' ? (
        <div className='login-container'>
          <Input type='email' placeholder='Email address' />
          <Input type='password' placeholder='Password' />
          <Button
            text='Log in'
            borderColor='blue'
            textColor='blue'
            className='submit'
          />
          <button className='forgot-pass'>Forgot password?</button>
        </div>
      ) : formType === 'signup' ? (
        <div className='signup-container'>
          <Input placeholder='First name' />
          <Input type='email' placeholder='Email address' />
          <Input type='password' placeholder='Password' />
          <Button
            text='Register'
            borderColor='blue'
            textColor='blue'
            className='submit'
          />
          <button className='login' onClick={() => setFormType('login')}>
            Sign in instead
          </button>
        </div>
      ) : (
        <p>Something went wrong</p>
      )}
    </StyledWrapper>
  );
};

export default LogInSignUpForm;
