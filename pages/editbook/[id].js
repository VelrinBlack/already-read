import StyledWrapper from 'styles/pages/editbook/[id].styles';
import Logo from 'components/atoms/Logo/Logo';
import EditBookForm from 'components/organisms/EditBookForm/EditBookForm';

const EditBook = () => (
  <StyledWrapper>
    <div className='logo-container'>
      <Logo />
    </div>
    <EditBookForm />
  </StyledWrapper>
);

export default EditBook;
