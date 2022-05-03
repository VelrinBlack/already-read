import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import SearchBoxSection from 'components/organisms/SearchBoxSection/SearchBoxSection';

const StyledWrapper = styled.div`
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
`;

const Search = () => (
  <StyledWrapper>
    <div className='logo-container'>
      <Logo />
    </div>

    <SearchBoxSection />
  </StyledWrapper>
);

export default Search;
