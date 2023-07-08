import StyledWrapper from './BookList.styles';
import BookCard from '../../molecules/BookCard/BookCard';

const BookList = ({ books }) => (
  <StyledWrapper className='book-list'>
    {books.map((book, key) => (
      <BookCard data={book} key={key} />
    ))}
  </StyledWrapper>
);

export default BookList;
