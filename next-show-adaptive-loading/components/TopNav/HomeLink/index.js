

import Link from 'next/link';


import { PAGES } from '../../../utils/constants';

const HomeLink = () => {
  

  return (
    <>
      <Link href={PAGES.HOME} replace>
        <a>
          <h3 className='link'>Home</h3>
        </a>
      </Link>
    </>
  );
};

export default HomeLink;
