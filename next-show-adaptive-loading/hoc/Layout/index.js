
import LiteModeDebugging from '../../components/LiteModeDebugging';
import globalStyles from '../../styles/global.js';

const Layout = ({ children }) => (
  <div>
    <LiteModeDebugging />
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
