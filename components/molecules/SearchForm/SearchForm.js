import StyledWrapper from './SearchForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title || isbn) {
      setError(false);

      if (title && isbn) {
        router.push(`/search?title=${title}&isbn=${isbn}`);
      } else if (title) {
        router.push(`/search?title=${title}`);
      } else if (isbn) {
        router.push(`/search?isbn=${isbn}`);
      }
    } else {
      setError(true);
    }
  };

  return (
    <StyledWrapper onSubmit={handleSubmit} error={error}>
      <div className='inputs-container'>
        <Input
          type='search'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder='Book title'
        />
        <p>or</p>
        <Input
          type='search'
          value={isbn}
          onChange={({ target }) => setIsbn(target.value)}
          placeholder='ISBN number'
        />
      </div>
      <Button text='Search' textColor='white' borderColor='yellow' />
    </StyledWrapper>
  );
};

export default SearchForm;
