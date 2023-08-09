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
  const [exists, setExists] = useState(null);
  const [error, setError] = useState(null);
  const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);

  const [title, setTitle] = useState('');
  const [ISBN, setISBN] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageName, setCoverImageName] = useState('');

  const router = useRouter();
  const { id: bookID } = router.query;

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      router.push('/');
    }

    if (!bookCover || !title || !ISBN || !price || !condition || !description) {
      return setError(strings.formError.PARAMETER_MISSING);
    } else {
      setError(null);
    }

    if (title.length < 2) {
      return setError(strings.formError.TOO_SHORT_TITLE);
    } else {
      setError(null);
    }

    if (title.length > 50) {
      return setError(strings.formError.TOO_LONG_TITLE);
    } else {
      setError(null);
    }

    if (isNaN(Number(price))) {
      return setError(strings.formError.INVALID_PRICE);
    } else {
      setError(null);
    }

    if (description.length < 200) {
      return setError(strings.formError.TOO_SHORT_DESCRIPTION);
    } else {
      setError(null);
    }

    if (description.length > 900) {
      return setError(strings.formError.TOO_LONG_DESCRIPTION);
    } else {
      setError(null);
    }

    const formData = new FormData();
    formData.append('bookCover', bookCover);
    formData.append('bookID', bookID);
    formData.append('title', title);
    formData.append('ISBN', ISBN);
    formData.append('price', price);
    formData.append('condition', condition);
    formData.append('description', description);

    if (exists) {
      // update existing book
      axios
        .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/update`, formData, {
          headers: {
            Authorization: user.token,
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.message === strings.apiResponseMessage.UPDATED_SUCCESSFULLY) {
            setUpdatedSuccessfully(true);

            setTimeout(() => {
              setUpdatedSuccessfully(false);
            }, 5000);
          }
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.UNSUPPORTED_FILE_TYPE) {
            setError(strings.formError.UNSUPPORTED_IMAGE_FORMAT);
          } else if (err.response?.data.message === strings.apiResponseMessage.INVALID_ISBN) {
            setError(strings.formError.INVALID_ISBN);
          } else {
            setError(strings.formError.SOMETHING_WENT_WRONG);
          }
        });
    } else {
      // create a new book
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/createOne`, formData, {
          headers: {
            Authorization: user.token,
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.message === strings.apiResponseMessage.CREATED_SUCCESSFULLY) {
            setCreatedSuccessfully(true);

            setTimeout(() => {
              setCreatedSuccessfully(false);
            }, 5000);
          }
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.UNSUPPORTED_FILE_TYPE) {
            setError(strings.formError.UNSUPPORTED_IMAGE_FORMAT);
          } else if (err.response?.data.message === strings.apiResponseMessage.INVALID_ISBN) {
            setError(strings.formError.INVALID_ISBN);
          } else {
            setError(strings.formError.SOMETHING_WENT_WRONG);
          }
        });
    }
  };

  useEffect(() => {
    if (error) {
      setUpdatedSuccessfully(false);
      setCreatedSuccessfully(false);
    }

    if (updatedSuccessfully) {
      setCreatedSuccessfully(false);
    }
  }, [error, updatedSuccessfully]);

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
            setExists(false);
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
          setExists(true);
          setBookCover(res.data);
          setCoverLoading(false);
        })
        .catch(() => {
          router.push('/');
        });
    }
  }, [coverImageName, router]);

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <div className='background-container'>
        <button className='change-cover-button' type='button'>
          <input
            type='file'
            className='file-input'
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
                type='number'
              />
            </div>

            <div className='pair-container'>
              <label htmlFor='condition'>Condition:</label>

              <select
                id='condition'
                disabled={loading}
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option value=''></option>
                <option value='New'>New</option>
                <option value='Used'>Used</option>
              </select>
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

      {error && (
        <div className='error mobile'>
          <span>{error}</span>
        </div>
      )}

      {updatedSuccessfully && (
        <div className='success mobile'>
          <span>Updated successfully</span>
        </div>
      )}

      {createdSuccessfully && (
        <div className='success mobile'>
          <span>Created successfully</span>
        </div>
      )}

      <div className='buttons-container'>
        <Button
          content='Exit'
          borderColor='blue'
          textColor='white'
          type='button'
          onClick={() => {
            router.push('/myaccount');
          }}
        />
        <Button
          content='Save changes'
          borderColor='blue'
          backgroundColor='blue'
          textColor='white'
          type='submit'
          disabled={coverLoading}
        />
      </div>

      {error && (
        <div className='error desktop'>
          <span>{error}</span>
        </div>
      )}

      {updatedSuccessfully && (
        <div className='success desktop'>
          <span>Updated successfully</span>
        </div>
      )}

      {createdSuccessfully && (
        <div className='success desktop'>
          <span>Created successfully</span>
        </div>
      )}
    </StyledWrapper>
  );
};

export default EditBookForm;
