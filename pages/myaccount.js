import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import hamburgerIcon from 'images/hamburger.svg';
import GeneralSettingsForm from 'components/organisms/GeneralSettingsForm/GeneralSettingsForm';
import BackIcon from 'images/back.svg';
import Link from 'next/link';
import Decoration1 from 'images/decoration1.svg';
import Decoration2 from 'images/decoration2.svg';
import { useEffect, useState, useContext } from 'react';
import CloseIcon from 'images/close.svg';
import StyledWrapper from 'styles/pages/myaccount.styles';
import strings from 'strings.json';
import BookList from 'components/organisms/BookList/BookList';
import axios from 'axios';
import UserContext from 'UserContext';
import { useRouter } from 'next/router';

const MyAccount = () => {
  const { GENERAL, MY_BOOKS, MESSAGES, FAVOURITES } = strings.myAccountSection;
  const { user } = useContext(UserContext);
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState(GENERAL);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (activeSection === FAVOURITES) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/allFavourites`, {
          headers: {
            Authorization: user.token,
          },
        })
        .then((res) => setBooks(res.data.favourites))
        .catch(() => router.push('/'));
    }
  }, [activeSection, FAVOURITES, user, router]);

  return (
    <StyledWrapper>
      <div className='first-section'>
        <div className='logo-container'>
          <Logo />
        </div>

        <button className='menu-activation-button' onClick={() => setMenuActive(true)}>
          <div className='image-container'>
            <Image src={hamburgerIcon} alt='search' layout='fill' />
          </div>
        </button>

        {menuActive && (
          <div className='menu'>
            <nav className='mobile-navigation'>
              <ul>
                {Object.values(strings.myAccountSection).map((sectionName) => (
                  <li
                    onClick={() => setActiveSection(sectionName)}
                    className={activeSection === sectionName && 'active'}
                    key={sectionName}
                  >
                    {sectionName}
                  </li>
                ))}
              </ul>
            </nav>
            <button className='close-button' onClick={() => setMenuActive(false)}>
              <div className='image-container'>
                <Image src={CloseIcon} alt='' layout='fill' />
              </div>
            </button>
          </div>
        )}

        <div className='decoration1-container'>
          <Image src={Decoration1} alt='' layout='fill' />
        </div>
      </div>

      <main>
        <h2 className='section-title'>{activeSection}</h2>

        {activeSection === GENERAL ? (
          <GeneralSettingsForm />
        ) : activeSection === MY_BOOKS ? (
          'Available soon'
        ) : activeSection === MESSAGES ? (
          'Available soon'
        ) : (
          <>
            {books === null ? (
              <p className='loading-favourites'>Loading...</p>
            ) : !books.length ? (
              <p className='no-favourites'>Your list is empty</p>
            ) : (
              <BookList books={books} />
            )}
          </>
        )}
      </main>

      <nav className='desktop-navigation'>
        <div className='decoration2-container'>
          <Image src={Decoration2} alt='' layout='fill' />
        </div>
        <ul>
          {Object.values(strings.myAccountSection).map((sectionName) => (
            <li
              onClick={() => setActiveSection(sectionName)}
              className={activeSection === sectionName && 'active'}
              key={sectionName}
            >
              {sectionName}
            </li>
          ))}
        </ul>
        <Link href='/' passHref>
          <button>
            <div className='image-container'>
              <Image src={BackIcon} alt='back' layout='fill' className='backIcon' />
            </div>
            <p>Home page</p>
          </button>
        </Link>
      </nav>
    </StyledWrapper>
  );
};

export default MyAccount;
