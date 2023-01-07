import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import SearchBoxSection from 'components/organisms/SearchBoxSection/SearchBoxSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BookList from 'components/organisms/BookList/BookList';
import axios from 'axios';
import strings from 'strings';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;

  main {
    flex: 1;
    background-color: ${({ theme }) => theme.color.darkGrey};

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
  }
`;

const Search = () => {
  const router = useRouter();
  const { title, ISBN } = router.query;

  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  // loading books
  useEffect(() => {
    if (title || ISBN) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getFiltered?${
            title ? 'title=' + title : 'ISBN=' + ISBN
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
  }, [title, ISBN]);

  return (
    <StyledWrapper>
      <main>
        <div className='logo-container'>
          <Logo />
        </div>

        <SearchBoxSection />

        {error ? <p className='error'>{error}</p> : <BookList books={books} />}
      </main>
      <MultiUseSection />
    </StyledWrapper>
  );
};

export default Search;
