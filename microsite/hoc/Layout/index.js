
import Navigation from '../../components/Navigation';
import globalStyles from '../../styles/global.js';

const Layout = ({ children }) => (
  <div className='layout'>
    <Navigation />
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
