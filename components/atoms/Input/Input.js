import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 45px;

  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.XS};

  outline: none;

  @media (min-width: 2560px) {
    height: 55px;
    font-size: ${({ theme }) => theme.fontSize.S};
  }
`;

export default Input;
