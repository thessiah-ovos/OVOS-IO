import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            OVOS
            <img className='brand-logo' src='icons-utilities/company/ovos-icon-white.png' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>            
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/beatstore'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Beat Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pricing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>

            <li>
            </li>
          </ul>
          {
                userInfo ? <Link to="/profile" className='nav-links-name'
                onClick={closeMobileMenu}>
                  {userInfo.name}
                </Link>:
               button && <Button buttonStyle='btn--outline'>SIGN IN</Button>
        }
        </div>
      </nav>
    </>
  );
}

export default Navbar;