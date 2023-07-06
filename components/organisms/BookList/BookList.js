import StyledWrapper from './BookList.styles';
import BookCard from '../../molecules/BookCard/BookCard';

const BookList = ({ books }) => (
  <StyledWrapper>
    {books.map((book, key) => (
      <BookCard data={book} key={key} />
    ))}
  </StyledWrapper>
);

export default BookList;
