import StyledWrapper from './EditBookForm.styles';
import Image from 'next/image';
import bookCover from 'images/book_cover.webp';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const EditBookForm = () => (
  <StyledWrapper>
    <div className='background-container'>
      <div className='book-cover-container'>
        <Image src={bookCover} alt='book cover' layout='fill' objectFit='cover' />
      </div>
    </div>

    <div className='fields-container'>
      <label htmlFor='title'>Title:</label>
      <Input id='title' />
      <label htmlFor='ISBN'>ISBN:</label>
      <Input id='ISBN' />
      <div className='double-input-container'>
        <div className='pair-container'>
          <label htmlFor='price'>Price:</label>
          <Input id='price' />
        </div>
        <div className='pair-container'>
          <label htmlFor='condition'>Condition:</label>
          <Input id='condition' />
        </div>
      </div>
      <label htmlFor='description'>Description:</label>
      <textarea id='description'></textarea>
    </div>

    <div className='buttons-container'>
      <Button content='Exit' borderColor='blue' textColor='white' />
      <Button content='Save changes' borderColor='blue' backgroundColor='blue' textColor='white' />
    </div>
  </StyledWrapper>
);

export default EditBookForm;
