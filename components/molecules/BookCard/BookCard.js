import StyledWrapper from './BookCard.styles';
import Image from 'next/image';
import likeImg from 'images/like.svg';
import { useState, useEffect } from 'react';

const BookCard = ({ data: { title, author, price, ISBN, yearPublished, state } }) => {
  const [viewportWidth, setViewportWidth] = useState(0);

  const handleResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledWrapper>
      <div className='image-container'></div>
      <div className='content-container'>
        <h2 className='title'>{title}</h2>

        <div className='middle-container'>
          <p className='year-published'>Year published: {yearPublished}</p>
          <p className='isbn'>ISBN: {ISBN}</p>
        </div>

        <div className='bottom-container'>
          <div className='price-container'>
            <p className='price'>$ {price}</p>
          </div>
          <button className='like-button'>
            {viewportWidth >= 768 ? (
              <p className='like-text'>Add to favourites</p>
            ) : (
              <div className='like-image-container'>
                <Image src={likeImg} alt='like image' layout='fill' />
              </div>
            )}
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};
export default BookCard;
