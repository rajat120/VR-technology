import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


function Header() {
  return <div>
    <Navigation/>
    <MobileNavigation/>
  </div>;
}

export default Header;
