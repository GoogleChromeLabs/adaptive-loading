
import { useContext } from 'react';

import HomeLink from './HomeLink';
import BackLink from './BackLink';
import LiteModeDebugging from '../LiteModeDebugging';
import { AppContext } from '../../contexts';

const TopNav = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
    <div className='top-nav'>
      <div className='links'>
        <HomeLink />
        <BackLink />
      </div>
      <LiteModeDebugging />
    </div>
    <style jsx>{`
      .top-nav {
        position: absolute;
        top: 0;
        padding: 0 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .links {
        display: flex;
      }
      :global(a) {
        color: ${theme.palette.text.primary};
        text-decoration: none;
      }
      :global(h3.link) {
        margin: 12px 8px;
      }
    `}</style>
    </>
  );
};

export default TopNav;
