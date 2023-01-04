import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 30px;

  @media (min-width: 768px) {
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledWrapper;
