import StyledWrapper from './GeneralSettingsForm.style.js';
import Image from 'next/image';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import profileIcon from 'images/profile.svg';
import { useState, useContext, useEffect } from 'react';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';
import strings from 'strings.json';
import axios from 'axios';

const GeneralSettingsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const isEmail = (str) => {
    return str
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const saveUser = ({ newName, newEmail, token }) => {
    setUser({
      name: newName,
      email: newEmail,
      token,
    });

    localStorage.setItem('user_name', newName);
    localStorage.setItem('user_email', newEmail);
    localStorage.setItem('user_token', token);

    setName(newName);
    setEmail(newEmail);
    setOldPassword('');
    setNewPassword('');
  };

  useEffect(() => {
    const userName = localStorage.getItem('user_name');
    const userEmail = localStorage.getItem('user_email');

    if (userName && userEmail) {
      setName(userName);
      setEmail(userEmail);
    } else {
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    if (error) {
      setSuccess(false);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !oldPassword || !newPassword) {
      return setError(strings.formError.parameterMissing);
    } else {
      setError('');
    }

    if (name.length < 2) {
      return setError(strings.formError.invalidName);
    } else {
      setError('');
    }

    if (!isEmail(email)) {
      return setError(strings.formError.invalidEmail);
    } else {
      setError('');
    }

    if (newPassword.length < 5) {
      return setError(strings.formError.tooShortPassword);
    } else {
      setError('');
    }

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/update`,
        {
          newName: name,
          newEmail: email,
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: user.token,
          },
        },
      )
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.updatedSuccessfully) {
          saveUser(res.data);

          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      })
      .catch((err) => {
        if (err.response?.data.message === strings.apiResponseMessage.invalidCredentials) {
          setError('Invalid credentials');
        } else if (err.response?.data.message === strings.apiResponseMessage.alreadyExists) {
          setError('The email is already taken');
        } else {
          setError('Something went wrong');
        }
      });
  };

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <button className='change-image-button' type='button'>
        <Image src={profileIcon} layout='fill' alt='profile icon' />
      </button>

      <label htmlFor='name'>Name:</label>
      <Input value={name} onChange={(e) => setName(e.target.value)} id='name' />
      <label htmlFor='email'>Email:</label>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
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
          type='submit'
          text='Save changes'
          textColor='white'
          backgroundColor='blue'
          className='save-button'
        />
      </div>

      {error && (
        <div className='error'>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className='success'>
          <span>Changes saved</span>
        </div>
      )}
    </StyledWrapper>
  );
};

export default GeneralSettingsForm;
