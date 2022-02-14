import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function MobileNavigation() {
    const [open, setOpen] = useState(false);
    
  return <div className='mobileNavigation'>

    { open ? <CloseIcon className='humburger' onClick={()=> setOpen(!open)}/> : <MenuIcon className='humburger' onClick={()=> setOpen(!open)}/>}

      { open && <NavLink/>}
  </div>;
}

export default MobileNavigation;
