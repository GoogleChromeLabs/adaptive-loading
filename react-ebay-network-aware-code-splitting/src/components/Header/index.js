
import React from 'react';

import Logo from '../Logo';
import { SearchIconButton, ProfileIconButton, CartIconButton } from './ActionButtons';
import './header.css';

const Header = () => (
  <div className='header'>
    <Logo />
    <div>
      <SearchIconButton />
      <ProfileIconButton />
      <CartIconButton />
    </div>
  </div>
);

export default Header;
