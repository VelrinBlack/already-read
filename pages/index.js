import styled from 'styled-components';
import SearchSection from 'components/organisms/SearchSection/SearchSection';
import MultiUseSection from 'components/organisms/MultiUseSection/MultiUseSection';
import UserContext from 'UserContext';
import { useState } from 'react';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StyledWrapper>
        <SearchSection />
        <MultiUseSection />
      </StyledWrapper>
    </UserContext.Provider>
  );
};

export default Home;
