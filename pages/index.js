import styled from 'styled-components';
import SearchSection from 'components/organisms/SearchSection/SearchSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const Home = () => (
  <StyledWrapper>
    <SearchSection />
    <MultiUseSection />
  </StyledWrapper>
);

export default Home;
