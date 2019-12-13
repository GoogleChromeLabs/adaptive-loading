
import Link from 'next/link';

import { PAGES } from '../../utils/constants';
import theme from '../../styles/theme';

const HomeLink = () => (
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
    `}</style>
  </>
);

export default HomeLink;
