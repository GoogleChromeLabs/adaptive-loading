
import React from 'react';

import './assemblies.css';

const IconButton = ({ className }) => (
  <button className={`icon-button ${className}`} />
);

const SearchIconButton = () => (
  <IconButton className='search-icon-button' />
);

const ProfileIconButton = () => (
  <IconButton className='profile-icon-button' />
);

const CartIconButton = () => (
  <IconButton className='cart-icon-button' />
);

export {
  SearchIconButton,
  ProfileIconButton,
  CartIconButton
};
