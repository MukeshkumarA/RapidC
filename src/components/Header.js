import React, { useContext, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { UserContext, ThemeContext } from '../utils/Context';
import UserProfile from './UserProfile/UserProfile';
import { useTheme } from '../utils/ContextProvider';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon, faMoon, faSun, faBars, faCarrot } from './FontAwesome';

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const { theme, toggleTheme } = useTheme();

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center md:justify-around  gap-x-14 md:gap-0   shadow-lg py-5">
        <div>
          <Title />
        </div>
        <div className='hidden md:block'>
          <ul className="flex space-x-8 mt-3 font-semibold">
            {[
              { to: '/', text: 'Home' },
              // { to: '/about', text: 'About' },
              // { to: '/contact', text: 'Contact' },
              { to: '/cart', text: 'Cart - ' + cartItems.length },
              (!user.isLoggedIn) ? { to: '/login', text: 'Login' } : { to: null, text: <UserProfile /> },
              // { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
              {
                to: null,
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

        <div className='visible md:hidden mt-1'>
          <ul className="flex space-x-3 font-semibold">
            <li>
              {(user.isLoggedIn) && <UserProfile />}
            </li>

            <li>
              <FontAwesomeIcon icon={faBars} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            </li>

            <li>
              <Link to={'/cart'}>
                <FontAwesomeIcon icon={faCarrot} />
              </Link>

            </li>

            <li>
              {
                theme === 'light' ? (
                  <span className='cursor-pointer text-gray-800' onClick={toggleTheme}  ><FontAwesomeIcon icon={faMoon} /></span>
                ) : (
                  <span className='cursor-pointer text-white-800' onClick={toggleTheme} ><FontAwesomeIcon icon={faSun} /></span>
                )
              }
            </li>

          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className='absolute hidden'>
            <ul className="space-x-8 font-semibold">
              {[
                { to: '/', text: 'Home' },
                // { to: '/about', text: 'About' },
                // { to: '/contact', text: 'Contact' },
                { to: '/cart', text: 'Cart - ' + cartItems.length },
                (!user.isLoggedIn) ? { to: '/login', text: 'Login' } : { to: null, text: 'Logout' },
                // { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
              ].map(({ to, text }, index) => (
                <li key={index} className='hover:font-bold'>
                  <Link to={to}>
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

// const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <div className={`flex justify-between items-center shadow-lg py-5 ${isMobileMenuOpen ? 'bg-gray-200' : ''}`}>
//         <Title />
//         <div className="md:hidden">
//           {isMobileMenuOpen ? (
//             <FontAwesomeIcon icon={faTimes} onClick={() => setMobileMenuOpen(false)} />
//           ) : (
//             <FontAwesomeIcon icon={faBars} onClick={() => setMobileMenuOpen(true)} />
//           )}
//         </div>
//         <div className="hidden md:flex">
//           <ul className="flex space-x-8 mt-3 font-semibold">
//             {[
//               { to: '/', text: 'Home' },
//               // { to: '/about', text: 'About' },
//               // { to: '/contact', text: 'Contact' },
//               { to: '/cart', text: `Cart - ${cartItems.length}` },
//               { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
//               {
//                 to: '/',
//                 text: theme === 'light' ? (
//                   <span className='cursor-pointer text-xl text-gray-800' onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /></span>
//                 ) : (
//                   <span className='cursor-pointer text-xl text-white-800' onClick={toggleTheme}><FontAwesomeIcon icon={faSun} /></span>
//                 )
//               }
//             ].map(({ to, text }, index) => (
//               <li key={index} className='hover:font-bold'>
//                 <Link to={to}>
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-200 py-3">
//           <ul className="flex flex-col items-center space-y-4">
//             {/* Mobile menu items */}
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             {/* Add more mobile menu items as needed */}
//           </ul>
//         </div>
//       )}
//     </>
//   );