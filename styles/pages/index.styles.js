import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

export default StyledWrapper;
