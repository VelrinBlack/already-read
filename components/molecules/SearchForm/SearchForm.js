import StyledWrapper from './SearchForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const SearchForm = () => (
  <StyledWrapper>
    <div className='inputs-container'>
      <Input type='search' placeholder='Book title' />
      <p>or</p>
      <Input type='search' placeholder='ISBN number' />
    </div>
    <Button text='Search' textColor='white' borderColor='yellow' />
  </StyledWrapper>
);

export default SearchForm;
