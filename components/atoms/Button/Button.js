import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 100%;
  height: 45px;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.color[backgroundColor] : 'transparent'};
  border: ${({ theme, borderColor }) =>
    borderColor ? `2px solid ${theme.color[borderColor]}` : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.XS};
  font-weight: bold;
  color: ${({ theme, textColor }) => theme.color[textColor]};

  cursor: pointer;

  @media (min-width: 2560px) {
    height: 55px;
    font-size: ${({ theme }) => theme.fontSize.S};
  }
`;

const Button = ({ content, type = 'text', backgroundColor, borderColor, textColor, ...props }) => (
  <StyledWrapper
    type={type}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    textColor={textColor}
    {...props}
  >
    {content}
  </StyledWrapper>
);

export default Button;
