import StyledWrapper from './BookList.styles';
import BookCard from '../../molecules/BookCard/BookCard';

const BookList = ({ books, editButtons }) => (
  <StyledWrapper className='book-list'>
    {books.map((book, key) => (
      <BookCard data={book} key={key} editButton={editButtons} />
    ))}
  </StyledWrapper>
);

export default BookList;
