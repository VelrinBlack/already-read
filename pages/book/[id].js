import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import bookCover from 'images/book_cover.webp';
import profileImage from 'images/profile.svg';
import Button from 'components/atoms/Button/Button';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserContext from 'UserContext';
import StyledWrapper from 'styles/pages/book/[id].styles';
import strings from 'strings.json';

const Book = () => {
  const [title, setTitle] = useState('Loading...');
  const [price, setPrice] = useState('...');
  const [condition, setCondition] = useState('...');
  const [sellerName, setSellerName] = useState('...');
  const [sellerEmail, setSellerEmail] = useState('Loading seller info...');
  const [isFavourite, setIsFavourite] = useState(null);

  const router = useRouter();
  const { id: bookID } = router.query;

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (bookID) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/book/getOne?id=${bookID}`)
        .then((res) => {
          setTitle(res.data.book.title);
          setPrice(res.data.book.price);
          setCondition(res.data.book.condition);
          setSellerName(res.data.book.seller.name);
          setSellerEmail(res.data.book.seller.email);
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
          if (res.data.message === strings.apiResponseMessage.bookIsFavourite) {
            setIsFavourite(true);
          } else if (res.data.message === strings.apiResponseMessage.bookIsNotFavourite) {
            setIsFavourite(false);
          }
        })
        .catch(() => {
          router.push('/');
        });
    }
  }, [user, bookID, router]);

  return (
    <StyledWrapper>
      <Logo />
      <div className='book-cover-container'>
        <Image src={bookCover} alt='book cover' />
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
                />
              ) : (
                <Button
                  className='favourite-button'
                  content='Add to favourites'
                  backgroundColor='darkGrey'
                  borderColor='white'
                  textColor='white'
                />
              )}
            </>
          )}
        </div>
      </div>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sociis natoque
        penatibus et magnis dis parturient montes nascetur. Pellentesque massa placerat duis
        ultricies. Fusce ut placerat orci nulla. Sed faucibus turpis in eu. Risus quis varius quam
        quisque id diam vel quam elementum. Malesuada fames ac turpis egestas sed tempus urna et.
        Amet venenatis urna cursus eget nunc scelerisque. Pretium vulputate sapien nec sagittis
        aliquam malesuada bibendum. Sed odio morbi quis commodo odio aenean sed adipiscing diam.
        Augue mauris augue neque gravida in fermentum et sollicitudin ac. Elit pellentesque habitant
        morbi tristique senectus et netus et malesuada. Suspendisse sed nisi lacus sed viverra
        tellus in.
      </p>
      <div className='second-background'>
        <div className='contact-info'>
          <div className='profile-image-container'>
            <Image src={profileImage} alt='' layout='fill' />
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
          <Image src={profileImage} alt='' layout='fill' />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Book;
