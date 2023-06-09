import StyledWrapper from './GeneralSettingsForm.style.js';
import Image from 'next/image';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import profileIcon from 'images/profile.svg';
import { useState, useContext, useEffect } from 'react';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';

const GeneralSettingsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const router = useRouter();
  const { user } = useContext(UserContext);

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

  return (
    <StyledWrapper>
      <button className='change-image-button'>
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
          text='Save changes'
          textColor='white'
          backgroundColor='blue'
          className='save-button'
        />
      </div>
    </StyledWrapper>
  );
};

export default GeneralSettingsForm;
