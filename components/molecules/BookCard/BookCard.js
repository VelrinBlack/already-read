import StyledWrapper from './BookCard.styles';
import Image from 'next/image';
import likeImg from 'images/like.svg';
import dislikeImg from 'images/dislike.svg';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserContext from 'UserContext';
import axios from 'axios';
import strings from 'strings.json';
import editImg from 'images/edit.svg';

const BookCard = ({ data: { title, price, ISBN, condition, imageName, _id }, editButton }) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isFavourite, setIsFavourite] = useState(null);
  const [image, setImage] = useState(null);

  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/checkIfFavourite?bookID=${_id}`, {
          headers: {
            Authorization: user.token,
          },
        })
        .then((res) => {
          if (res.data.message === strings.apiResponseMessage.BOOK_IS_FAVOURITE) {
            setIsFavourite(true);
          } else if (res.data.message === strings.apiResponseMessage.BOOK_IS_NOT_FAVOURITE) {
            setIsFavourite(false);
          }
        })
        .catch(() => {
          router.push('/');
        });
    }
  }, [user, router, _id]);

  useEffect(() => {
    if (imageName) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/image/${imageName}`,
        method: 'GET',
        responseType: 'blob',
      })
        .then((res) => {
          setImage(res.data);
        })
        .catch((err) => {
          if (err.response?.data.message === strings.apiResponseMessage.INVALID_CREDENTIALS) {
            router.push('/');
          }
        });
    }
  }, [imageName, router]);

  const removeFromFavourites = () => {
    setIsFavourite(null);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/removeFavourite/${_id}`, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.REMOVED_SUCCESSFULLY) {
          setIsFavourite(false);
        }
      })
      .catch(() => {
        router.push('/');
      });
  };

  const addToFavourites = () => {
    setIsFavourite(null);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/addFavourite`,
        {
          bookID: _id,
        },
        {
          headers: {
            Authorization: user.token,
          },
        },
      )
      .then((res) => {
        if (res.data.message === strings.apiResponseMessage.CREATED_SUCCESSFULLY) {
          setIsFavourite(true);
        }
      })
      .catch(() => {
        router.push('/');
      });
  };

  return (
    <StyledWrapper className='book-card'>
      <Link href={`/book/${_id}`} passHref>
        <div className='image-container'>
          {image && <Image src={URL.createObjectURL(image)} alt='cover image' layout='fill' />}
        </div>
      </Link>
      <div className='content-container'>
        <Link href={`/book/${_id}`} passHref>
          <h2 className='title'>{title}</h2>
        </Link>

        <div className='middle-container'>
          <p className='condition'>Condition: {condition}</p>
          <p className='isbn'>ISBN: {ISBN}</p>
        </div>

        <div className='bottom-container'>
          <div className='price-container'>
            <p className='price'>$ {price}</p>
          </div>
          {user && (
            <>
              {editButton ? (
                <button className='edit-button'>
                  <Link href={`/editbook/${_id}`} passHref>
                    {viewportWidth >= 768 ? (
                      <a href='Edit book' className='edit-text'>
                        Edit book
                      </a>
                    ) : (
                      <div className='edit-image-container'>
                        <Image src={editImg} alt='edit image' layout='fill' />
                      </div>
                    )}
                  </Link>
                </button>
              ) : isFavourite === null ? (
                <button className='like-button'>
                  {viewportWidth >= 768 ? (
                    <p className='like-text'>Loading...</p>
                  ) : (
                    <p className='like-text'>...</p>
                  )}
                </button>
              ) : isFavourite ? (
                <button className='like-button' onClick={removeFromFavourites}>
                  {viewportWidth >= 768 ? (
                    <p className='like-text'>Remove favourite</p>
                  ) : (
                    <div className='like-image-container'>
                      <Image src={dislikeImg} alt='dislike image' layout='fill' />
                    </div>
                  )}
                </button>
              ) : (
                <button className='like-button' onClick={addToFavourites}>
                  {viewportWidth >= 768 ? (
                    <p className='like-text'>Add to favourites</p>
                  ) : (
                    <div className='like-image-container'>
                      <Image src={likeImg} alt='like image' layout='fill' />
                    </div>
                  )}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};
export default BookCard;
