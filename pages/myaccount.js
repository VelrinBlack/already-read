import Logo from 'components/atoms/Logo/Logo';
import Image from 'next/image';
import hamburgerIcon from 'images/hamburger.svg';
import GeneralSettingsForm from 'components/organisms/GeneralSettingsForm/GeneralSettingsForm';
import BackIcon from 'images/back.svg';
import Link from 'next/link';
import Decoration1 from 'images/decoration1.svg';
import Decoration2 from 'images/decoration2.svg';
import { useState } from 'react';
import CloseIcon from 'images/close.svg';
import StyledWrapper from 'styles/pages/myaccount.styles';
import strings from 'strings.json';

const MyAccount = () => {
  const { general, myBooks, messages, favourites } = strings.myAccountSection;

  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState(general);

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

        {activeSection === general ? <GeneralSettingsForm /> : 'Available soon'}
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
