import SearchSection from 'components/organisms/SearchSection/SearchSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';
import StyledWrapper from 'styles/pages/index.styles';

const Home = () => (
  <StyledWrapper>
    <SearchSection />
    <MultiUseSection />
  </StyledWrapper>
);

export default Home;
