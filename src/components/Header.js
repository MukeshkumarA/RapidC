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
  console.log(user);
  const { theme, toggleTheme } = useTheme();

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex justify-center md:justify-around  gap-x-14 md:gap-0   shadow-lg py-5">
        <div>
          <Title />
        </div>
        <div className='hidden md:block text-xl'>
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
            <li>
              <Link to={'/cart'} >
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
              <FontAwesomeIcon className='text-xl' icon={faBars} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            </li>}

            {isMobileMenuOpen && <li>
              <FontAwesomeIcon className='text-xl' icon={faX} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            </li>
            }

          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className='absolute md:hidden left-0 top-[100%] w-full z-50 bg-white h-lvh'>
            <ul className="font-semibold pl-[10%] pt-[5%]">
              {[
                { to: '/', text: 'Home' },
                // { to: '/about', text: 'About' },
                // { to: '/contact', text: 'Contact' },
                { to: '/cart', text: 'Cart - ' + cartItems.length },
                (!user.isLoggedIn) ? { to: '/login', text: 'Login' } : { to: null, text: 'Logout' },
                // { to: '/login', text: !user.isLoggedIn ? 'Log in' : <UserProfile /> },
              ].map(({ to, text }, index) => (
                <li key={index} className='hover:font-bold text-xl my-[8%] border-none border-b-cyan-950'>
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