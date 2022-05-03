import { useState, useEffect } from 'react';
import Image from 'next/image';
import StyledWrapper from './SearchBoxSection.style';
import searchIcon from 'images/search.svg';

const SearchBoxSection = () => {
  const [active, setActive] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const handleResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth >= 414) {
      setActive(true);
    }
  }, [viewportWidth]);

  return (
    <StyledWrapper>
      {active ? (
        <form>
          <input type='text' placeholder='Book title' />
          <input type='text' placeholder='ISBN number' />
          <button type='submit'>
            <div className='image-container'>
              <Image src={searchIcon} alt='search' layout='fill' />
            </div>
          </button>
        </form>
      ) : (
        <button className='activation-button' onClick={() => setActive(true)}>
          <div className='image-container'>
            <Image src={searchIcon} alt='search' layout='fill' />
          </div>
        </button>
      )}
    </StyledWrapper>
  );
};

export default SearchBoxSection;
