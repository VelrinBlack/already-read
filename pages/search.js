import Logo from 'components/atoms/Logo/Logo';
import SearchBoxSection from 'components/organisms/SearchBoxSection/SearchBoxSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BookList from 'components/organisms/BookList/BookList';
import axios from 'axios';
import strings from 'strings';
import Button from 'components/atoms/Button/Button';
import { useContext } from 'react';
import UserContext from 'UserContext';
import Link from 'next/link';
import StyledWrapper from 'styles/pages/search.styles';

const Search = () => {
  const router = useRouter();
  const { title, isbn } = router.query;

  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const { user } = useContext(UserContext);

  // loading books
  useEffect(() => {
    if (title || isbn) {
      axios
        .get(
          `${
            title && isbn
              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getFiltered?title=${title}&isbn=${isbn}`
              : title
              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getFiltered?title=${title}`
              : `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getFiltered?isbn=${isbn}`
          }`,
        )
        .then((res) => {
          setBooks(res.data.books);
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.notFound) {
            setError('No books found');
          } else {
            setError('Something went wrong');
          }
        });
    }
  }, [title, isbn]);

  return (
    <StyledWrapper>
      <main>
        <div className='top-section'>
          <div className='logo-container'>
            <Logo />
          </div>

          <SearchBoxSection />
        </div>

        {error ? <p className='error'>{error}</p> : <BookList books={books} />}

        {user ? (
          <div className='button-container'>
            <Button
              content='My account'
              textColor='yellow'
              backgroundColor='blue'
              className='my-account-button'
            />
          </div>
        ) : (
          <div className='button-container'>
            <Link href='/login'>
              <Button
                content='Log in'
                textColor='yellow'
                backgroundColor='blue'
                className='my-account-button'
              />
            </Link>
          </div>
        )}
      </main>
      <MultiUseSection />
    </StyledWrapper>
  );
};

export default Search;
