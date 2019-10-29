/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import './header.css';
import logo from '../../assets/images/logo.webp';
import hamburger from '../../assets/icons/hamburger.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='bottom-left'>
        <button className='menu-button'><img src={hamburger} width='24' height='18' alt='hamburger menu' /></button>
        <nav className='header-nav'>
          <a href='/' className='header-nav-item'>Home</a>
          <a href='https://dixiemech.store/' className='header-nav-item'>Shop</a>
          <a href='/groupbuys' className='header-nav-item'>GroupBuys</a>
          <a href='/news' className='header-nav-item'>News</a>
          <a href='https://dixiemech.store/pages/faq' className='header-nav-item'>Help</a>
        </nav>
      </div>
      <div className='bottom-center'>
        <a href='https://dixiemech.com/gmkdracula/' className='header-branding'>
          <img src={logo} alt='Dixie Mech' className='header-branding-logo' />
        </a>
      </div>
      <div className='bottom-right'>
        <nav className='header-nav'>
          <a href='https://discordapp.com/invite/KaZjphH' target='_blank' rel='noopener noreferrer' className='header-nav-item'>Discord</a>
          <a href='https://dixiemech.store/account/login' className='header-nav-item'>Account</a>
          <a href='https://dixiemech.store/search' className='header-nav-item'>Search</a>
          <a href='https://dixiemech.store/cart' className='header-nav-item'>Cart</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
