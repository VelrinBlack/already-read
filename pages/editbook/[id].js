import StyledWrapper from 'styles/pages/editbook/[id].styles';
import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import bookCover from 'images/book_cover.webp';

const EditBook = () => (
  <StyledWrapper>
    <div className='logo-container'>
      <Logo />
    </div>
    <div className='background-container'>
      <div className='book-cover-container'>
        <Image src={bookCover} alt='book cover' layout='fill' objectFit='cover' />
      </div>
    </div>
  </StyledWrapper>
);

export default EditBook;
