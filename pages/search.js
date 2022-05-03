import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import SearchBoxSection from 'components/organisms/SearchBoxSection/SearchBoxSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';

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

const Search = () => (
  <StyledWrapper>
    <main>
      <div className='logo-container'>
        <Logo />
      </div>

      <SearchBoxSection />
    </main>
    <MultiUseSection />
  </StyledWrapper>
);

export default Search;
