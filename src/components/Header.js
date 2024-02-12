import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

const Header= () => {
    return (
      <>
       <div className="flex justify-around shadow-lg py-5">
         <Title/>
         <div>
            <ul className="flex space-x-8 mt-3">
                <li>Search</li>
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
                <li>Sign in</li>
                <li>Cart</li>
            </ul>
         </div>
       </div>
        
      </>
    );
  }

  export default Header;