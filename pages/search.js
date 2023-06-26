import styled from 'styled-components';
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

const StyledWrapper = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.darkGrey};

  main {
    flex: 1;

    .top-section {
      position: sticky;
      top: 0;

      background-color: ${({ theme }) => theme.color.darkGrey};

      z-index: 1;

      .logo-container {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 15px;

        display: flex;
        justify-content: center;

        @media (min-width: 768px) {
          padding-bottom: 0;
        }

        @media (min-width: 2560px) {
          padding-top: 50px;
        }
      }
    }

    .error {
      margin-top: 30px;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.XS};
      color: ${({ theme }) => theme.color.white};

      @media (min-width: 1920px) {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSize.S};
      }
    }

    .button-container {
      position: fixed;
      bottom: 10px;

      width: 100%;
      padding: 0 30px;

      box-shadow: 0 0 10px 10px #31393c;

      @media (min-width: 768px) {
        width: 100%;
        margin: 0;

        display: flex;
        justify-content: center;
      }

      @media (min-width: 1366px) {
        visibility: hidden;
      }

      .my-account-button {
        @media (min-width: 768px) {
          width: 600px;
        }

        @media (min-width: 1366px) {
          width: 740px;
        }
      }
    }
  }

  section {
    display: none;

    @media (min-width: 1366px) {
      display: flex;
    }
  }
`;

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
