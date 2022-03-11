import { useEffect, useState } from 'react';
import StyledWrapper from './SearchSection.styles';
import Logo from 'components/atoms/Logo/Logo';
import SearchForm from 'components/molecules/SearchForm/SearchForm';
import Image from 'next/image';
import scrollDownIcon from 'images/scroll-down.svg';
import { useContext } from 'react';
import UserContext from 'UserContext';
import Button from 'components/atoms/Button/Button';

const SearchSection = () => {
  const { user } = useContext(UserContext);
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleResize = () => setViewportHeight(window.innerHeight);

  const scrollDown = () => {
    window.scrollTo({
      top: viewportHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledWrapper viewportHeight={viewportHeight}>
      <Logo />
      <div className='centered-container'>
        <h1 className='heading'>
          <span className='primary'>Find any </span>
          <span className='secondary'>book </span>
          <span className='primary'>at </span>
          <span className='secondary'>lower price</span>
        </h1>

        <SearchForm />
      </div>

      {/* this appears only on smaller screens */}
      {user ? (
        <Button
          text='My account'
          textColor='yellow'
          backgroundColor='blue'
          className='my-account-button'
        />
      ) : (
        <button className='scroll-down' onClick={scrollDown}>
          <div className='image-container'>
            <Image src={scrollDownIcon} layout='fill' alt='' />
          </div>
        </button>
      )}
    </StyledWrapper>
  );
};

export default SearchSection;
