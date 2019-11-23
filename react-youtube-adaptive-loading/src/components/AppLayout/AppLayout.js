
import React from 'react';

import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './AppLayout.scss';

export const AppLayout = ({ children }) => {
  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav />
        {children}
      </div>
    </ScrollToTop>
  );
};
