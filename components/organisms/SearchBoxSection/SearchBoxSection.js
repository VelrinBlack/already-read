import { useState, useEffect } from 'react';
import Image from 'next/image';
import StyledWrapper from './SearchBoxSection.style';
import searchIcon from 'images/search.svg';
import { useRouter } from 'next/router';
import Input from 'components/atoms/Input/Input';

const SearchBoxSection = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setTitle(router.query.title);
    setIsbn(router.query.isbn);
  }, [router.query]);

  const handleResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title || isbn) {
      setError(false);

      if (title && isbn) {
        window.location.href = `/search?title=${title}&isbn=${isbn}`;
      } else if (title) {
        window.location.href = `/search?title=${title}`;
      } else if (isbn) {
        window.location.href = `/search?isbn=${isbn}`;
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (viewportWidth >= 414) {
      setActive(true);
    }
  }, [viewportWidth]);

  return (
    <StyledWrapper onSubmit={handleSubmit} error={error}>
      {active ? (
        <form>
          <Input
            type='search'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder='Book title'
          />
          <Input
            type='search'
            value={isbn}
            onChange={({ target }) => setIsbn(target.value)}
            placeholder='ISBN number'
          />
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
