
import { useContext } from 'react';
import Link from 'next/link';

import { AppContext } from '../../../contexts';
import { PAGES } from '../../../utils/constants';

const HomeLink = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Link href={PAGES.HOME} replace>
        <a>
          <h3>Home</h3>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: ${theme.palette.text.primary};
          text-decoration: none;
        }
        h3 {
          margin: 12px 0;
        }
      `}</style>
    </>
  );
};

export default HomeLink;
