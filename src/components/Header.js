import React, { useContext, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { UserContext, ThemeContext } from '../utils/Context';
import UserProfile from './UserProfile/UserProfile';
import { useTheme } from '../utils/ContextProvider';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon, faMoon, faSun, faBars, faCartPlus, faX } from './FontAwesome';

const Header = () => {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();

  const cartItems = useSelector(store => store.cart.items);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex justify-between px-[10%] md:px-0 md:justify-around  gap-x-14 md:gap-0   shadow-lg py-5">
        <div>
          <Title />
        </div>
        <div className='hidden md:block text-[18px]'>
          <ul className="flex space-x-8 mt-2 font-semibold">
            {[
              { to: '/', text: 'Home' },
              // { to: '/about', text: 'About' },
              // { to: '/contact', text: 'Contact' },
              { to: '/cart', text: 'Cart - ' + cartItems.length },
              (!user.isLoggedIn) ? { to: '/login', text: 'Login' } : { to: null, text: <UserProfile /> },
              // { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
            ].map(({ to, text }, index) => (
              <li key={index} className='hover:font-bold'>
                <Link to={to}>
                  {text}
                </Link>
              </li>
            ))}
            <li>
              {theme === 'light' ? (
                <span className='cursor-pointer text-xl text-gray-800' onClick={toggleTheme}  ><FontAwesomeIcon icon={faMoon} /></span>
              ) : (
                <span className='cursor-pointer text-xl text-white-800' onClick={toggleTheme} ><FontAwesomeIcon icon={faSun} /></span>
              )
              }
            </li>
          </ul>
        </div>

        <div className='visible md:hidden mt-3'>
          <ul className="flex space-x-4 font-semibold ">
            <li>
              {(user.isLoggedIn) && <UserProfile />}
            </li>
            <li className='relative'>
              <Link to={'/cart'} >
                {cartItems.length > 0 && <div className='absolute z-50 text-xl -top-4 left-5 text-orange-400'>{cartItems.length}</div>}
                <FontAwesomeIcon className='text-xl' icon={faCartPlus} />
              </Link>

            </li>

            <li>
              {
                theme === 'light' ? (
                  <span className='cursor-pointer text-gray-800' onClick={toggleTheme}  ><FontAwesomeIcon className='text-xl' icon={faMoon} /></span>
                ) : (
                  <span className='cursor-pointer text-white-800' onClick={toggleTheme} ><FontAwesomeIcon className='text-xl' icon={faSun} /></span>
                )
              }
            </li>

            {!isMobileMenuOpen && <li>
              <FontAwesomeIcon className='cursor-pointer text-xl' icon={faBars} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            </li>}

            {isMobileMenuOpen && <li>
              <FontAwesomeIcon className='cursor-pointer text-xl' icon={faX} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            </li>
            }
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className=' mobileNavbar absolute bg-white md:hidden left-0 top-[100%] w-full z-50 h-lvh'>
            <ul className="font-semibold">
              {[
                { to: '/', text: 'Home' },
                // { to: '/about', text: 'About' },
                // { to: '/contact', text: 'Contact' },
                { to: '/cart', text: 'Cart - ' + cartItems.length },
                (!user.isLoggedIn) ? { to: '/login', text: 'Login' } : { to: null, text: 'Logout' },
                // { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
              ].map(({ to, text }, index) => (
                <li key={index} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className='hover:font-bold  pl-[10%] hover:pb-2  hover:shadow-md text-xl my-[8%] border-none border-b-cyan-950'>
                  <Link to={to} >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

    </>
  );
}

export default Header;
