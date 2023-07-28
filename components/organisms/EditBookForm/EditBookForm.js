import StyledWrapper from './EditBookForm.styles';
import Image from 'next/image';
import bookCoverPlaceholder from 'images/book_cover_placeholder.svg';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import UserContext from 'UserContext';
import axios from 'axios';
import strings from 'strings.json';

const EditBookForm = () => {
  const [bookCover, setBookCover] = useState(null);

  const [loading, setLoading] = useState(true);
  const [coverLoading, setCoverLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [ISBN, setISBN] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageName, setCoverImageName] = useState('');

  const router = useRouter();
  const { id: bookID } = router.query;

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (bookID) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getOne?id=${bookID}`)
        .then((res) => {
          setTitle(res.data.book.title);
          setISBN(res.data.book.ISBN);
          setPrice(res.data.book.price);
          setCondition(res.data.book.condition);
          setDescription(res.data.book.description);
          setCoverImageName(res.data.book.imageName);

          setLoading(false);
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.NOT_FOUND) {
            setLoading(false);
            setCoverLoading(false);
          } else {
            router.push('/');
          }
        });
    }
  }, [bookID, user, router]);

  useEffect(() => {
    if (coverImageName) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/image/${coverImageName}`,
        method: 'GET',
        responseType: 'blob',
      })
        .then((res) => {
          setBookCover(res.data);
          setCoverLoading(false);
        })
        .catch(() => {
          router.push('/');
        });
    }
  }, [coverImageName, router]);

  return (
    <StyledWrapper>
      <div className='background-container'>
        <button className='change-cover-button' type='button'>
          <input
            type='file'
            className={`file-input ${coverLoading && 'disabled'}`}
            disabled={coverLoading}
            onChange={(e) => {
              if (e.target.files.length) setBookCover(e.target.files[0]);
            }}
          />
          {bookCover ? (
            <Image
              src={URL.createObjectURL(bookCover)}
              alt='book cover'
              layout='fill'
              objectFit='cover'
            />
          ) : (
            <Image
              src={bookCoverPlaceholder}
              alt='book cover placeholder'
              layout='fill'
              objectFit='cover'
            />
          )}
        </button>
      </div>

      <div className='fields-container'>
        <div className='flex-container'>
          <label htmlFor='title'>Title:</label>
          <Input
            id='title'
            disabled={loading}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='ISBN'>ISBN:</label>
          <Input
            id='ISBN'
            disabled={loading}
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />

          <div className='double-input-container'>
            <div className='pair-container'>
              <label htmlFor='price'>Price:</label>
              <Input
                id='price'
                disabled={loading}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='pair-container'>
              <label htmlFor='condition'>Condition:</label>
              <Input
                id='condition'
                disabled={loading}
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className='flex-container'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            disabled={loading}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className='buttons-container'>
        <Button content='Exit' borderColor='blue' textColor='white' />
        <Button
          content='Save changes'
          borderColor='blue'
          backgroundColor='blue'
          textColor='white'
        />
      </div>
    </StyledWrapper>
  );
};

export default EditBookForm;
