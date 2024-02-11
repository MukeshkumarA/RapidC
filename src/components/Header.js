import React from 'react';
import Title from './Title';

const Header= () => {
    return (
      <>
       <div className="flex justify-around shadow-lg py-5">
         <Title/>
         <div>
            <ul className="flex space-x-8 mt-3">
                <li>Search</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Sign in</li>
                <li>Cart</li>
            </ul>
         </div>
       </div>
        
      </>
    );
  }

  export default Header;