import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import Button from 'components/atoms/Button/Button';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserContext from 'UserContext';
import StyledWrapper from 'styles/pages/book/[id].styles';
import strings from 'strings.json';

const Book = () => {
  const [imageName, setImageName] = useState('');
  const [title, setTitle] = useState('Loading...');
  const [price, setPrice] = useState('...');
  const [condition, setCondition] = useState('...');
  const [sellerName, setSellerName] = useState('...');
  const [sellerEmail, setSellerEmail] = useState('Loading seller info...');
  const [isFavourite, setIsFavourite] = useState(null);
  const [description, setDescription] = useState('...');

  const router = useRouter();
  const { id: bookID } = router.query;

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (bookID) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getOne?id=${bookID}`)
        .then((res) => {
          setImageName(res.data.book.imageName);
          setTitle(res.data.book.title);
          setPrice(res.data.book.price);
          setCondition(res.data.book.condition);
          setSellerName(res.data.book.seller.name);
          setSellerEmail(res.data.book.seller.email);
          setDescription(res.data.book.description);
        })
        .catch(() => {
          router.push('/');
        });
    }
  }, [bookID, router]);

  useEffect(() => {
    if (bookID && user) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/checkIfFavourite?bookID=${bookID}`, {
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
  }, [user, bookID, router]);

  const removeFromFavourites = () => {
    setIsFavourite(null);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/removeFavourite/${bookID}`, {
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
          bookID,
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
    <StyledWrapper>
      <Logo />
      <div className='book-cover-container'>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/image/${imageName}`}
          alt='book cover'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='first-background'>
        <h2 className='title'>{title}</h2>
        <div className='info-container'>
          <div className='price-container'>
            <p className='price'>$ {price}</p>
          </div>

          <div className='condition-container'>
            <p className='condition'>
              <span>Condition: </span>
              <span>{condition}</span>
            </p>
          </div>
          {user && (
            <>
              {isFavourite === null ? (
                <Button
                  className='favourite-button'
                  content='Loading...'
                  backgroundColor='darkGrey'
                  borderColor='white'
                  textColor='white'
                />
              ) : isFavourite ? (
                <Button
                  className='favourite-button'
                  content='Remove from favourites'
                  backgroundColor='darkGrey'
                  borderColor='white'
                  textColor='white'
                  onClick={removeFromFavourites}
                />
              ) : (
                <Button
                  className='favourite-button'
                  content='Add to favourites'
                  backgroundColor='darkGrey'
                  borderColor='white'
                  textColor='white'
                  onClick={addToFavourites}
                />
              )}
            </>
          )}
        </div>
      </div>
      <p className='description'>{description}</p>
      <div className='second-background'>
        <div className='contact-info'>
          <div className='profile-image-container'>
            {user && (
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profileImage/${user.email}`}
                alt='profile image'
                layout='fill'
              />
            )}
          </div>
          <div className='text-container'>
            <h2 className='name'>{sellerName}</h2>
            <p className='email'>{sellerEmail}</p>
          </div>
        </div>
      </div>

      {/* appears only on bigger screens (minimum 1366px) */}
      <div className='desktop-seller-info'>
        <div className='text-container'>
          <h2 className='name'>{sellerName}</h2>
          <p className='email'>{sellerEmail}</p>
        </div>
        <div className='profile-image-container'>
          {user && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profileImage/${user.email}`}
              alt='profile image'
              layout='fill'
            />
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Book;
