
import Link from 'next/link';

import NavigationList from '../NavigationList';
import SvgIcon from '../../SvgIcon';
import theme from '../../../styles/theme';
import { pages } from '../../../utils/links';

const AppBar = ({ openDrawer }) => (
  <>
    <header className='top-app-bar'>
      <div className='top-app-bar-row'>
        <div className='top-app-bar-section top-app-bar-section__start'>
          {/* TODO: side drawer hidden for now */}
          {/* <SvgIcon name='menu' withHoverEffect onClick={openDrawer} /> */}
          <Link href={pages.home.href} as={pages.home.as}>
            <a><SvgIcon name='main' /></a>
          </Link>
        </div>
        <div className='top-app-bar-section top-app-bar-section__end'>
          <NavigationList />
          {/* TODO: search button hidden for now */}
          {/* <SvgIcon name='search' withHoverEffect onClick={() => console.log('[AppBar] search click')} /> */}
        </div>
      </div>
    </header>
    <style jsx>{`
      .top-app-bar {
        position: fixed;
        width: 100%;
        height: 112px;
        display: flex;
        justify-content: space-between;
        color: white;
        background-color: ${theme.colors.headerBackground};
        transition: box-shadow 200ms linear;
        box-shadow: 0 2px 4px rgba(0,0,0,.5);
        z-index: 10;
      }
      .top-app-bar-row {
        position: relative;
        display: flex;
        width: 100%;
        height: 72px;
      }
      .top-app-bar-section {
        padding: 0 12px;
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
      }
      .top-app-bar-section__start {
        justify-content: flex-start;
      }
      .top-app-bar-section__end {
        justify-content: flex-end;
      }
      @media screen and (min-width: ${theme.breakpoint.tablet}px) {
        .top-app-bar {
          height: auto;
        }
      }
    `}</style>
  </>
);

export default AppBar;
