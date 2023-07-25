import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};

  .logo-container {
    display: flex;
    justify-content: center;
    padding: 40px 0 30px;
  }
`;

export default StyledWrapper;
