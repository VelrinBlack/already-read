import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import SearchBoxSection from 'components/organisms/SearchBoxSection/SearchBoxSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BookList from 'components/organisms/BookList/BookList';

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
  }
`;

const Search = () => {
  const router = useRouter();
  const { title, ISBN } = router.query;

  const [books, setBooks] = useState([
    {
      title: 'The Chronicks of Narnia',
      yearPublished: '2006',
      ISBN: '978-1-4028-9462-6',
      price: 32,
    },
    {
      title: 'The Chronicks of Narnia',
      yearPublished: '2006',
      ISBN: '978-1-4028-9462-6',
      price: 32,
    },
    {
      title: 'The Chronicks of Narnia',
      yearPublished: '2006',
      ISBN: '978-1-4028-9462-6',
      price: 32,
    },
  ]);

  return (
    <StyledWrapper>
      <main>
        <div className='logo-container'>
          <Logo />
        </div>

        <SearchBoxSection />

        <BookList books={books} />
      </main>
      <MultiUseSection />
    </StyledWrapper>
  );
};

export default Search;
