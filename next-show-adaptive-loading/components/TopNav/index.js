
import HomeLink from './HomeLink';
import LiteModeDebugging from '../LiteModeDebugging';

const TopNav = () => (
  <>
  <div className='top-nav'>
    <HomeLink />
    <LiteModeDebugging />
  </div>
  <style jsx>{`
    .top-nav {
      position: absolute;
      top: 0;
      padding: 0 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}</style>
  </>
);

export default TopNav;
