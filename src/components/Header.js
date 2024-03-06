import React, { useContext, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { UserContext, ThemeContext } from '../utils/Context';
import UserProfile from './UserProfile';
import { useTheme } from '../utils/ContextProvider';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="flex justify-around shadow-lg py-5">
        <Title />
        <div>
          <ul className="flex space-x-8 mt-3 font-semibold">
            {[
              { to: '/', text: 'Home' },
              // { to: '/about', text: 'About' },
              // { to: '/contact', text: 'Contact' },
              { to: '/cart', text: 'Cart - ' + cartItems.length + ' items' },
              { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
              {
                to: '/',
                text: theme === 'light' ? (
                  <span className='cursor-pointer text-xl text-gray-800' onClick={toggleTheme}  ><FontAwesomeIcon icon={faMoon} /></span>
                ) : (
                  <span className='cursor-pointer text-xl text-white-800' onClick={toggleTheme} ><FontAwesomeIcon icon={faSun} /></span>
                )
              }
            ].map(({ to, text }, index) => (
              <li key={index} className='hover:font-bold'>
                <Link to={to}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}

export default Header;