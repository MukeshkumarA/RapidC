import React, { useContext, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { UserContext, ThemeContext } from '../utils/Context';
import UserProfile from './UserProfile';
import { useTheme } from '../utils/ContextProvider';
import { useSelector } from 'react-redux';

const Header= () => {
  const {user} = useContext(UserContext);
  const {theme, toggleTheme} = useTheme();

  const cartItems = useSelector(store => store.cart.items);  
  console.log(cartItems);

    return (
      <>
       <div className="flex justify-around shadow-lg py-5">
         <Title/>
         <div>
            <ul className="flex space-x-8 mt-3">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    Cart - {cartItems.length} items
                  </Link>
                </li>
                <li>
                  {!user.isLoggedIn?
                  <Link to="/login">
                    Log in
                  </Link>:
                  <UserProfile />
                   }
                </li>
            </ul>
         </div>
         <div>
         {theme === "light" ? (
          <span className='cursor-pointer' onClick={toggleTheme} role="img" aria-label="Toggle Dark Mode">🌙</span>
          ) : (
              <span className='cursor-pointer' onClick={toggleTheme} role="img" aria-label="Toggle Light Mode">☀️</span>
          )}
         </div>
       </div>
        
      </>
    );
  }

  export default Header;