
import Link from 'next/link';

import ContainedButton from '../ContainedButton';

const Navigation = ({ url, page }) => (
  <div>
    { page > 1 && (
      <Link href={`${url}${page - 1}`}>
        <a>
          <ContainedButton style={{marginRight: '12px'}}>Previous</ContainedButton>
        </a>
      </Link>
    ) }
    <Link href={`${url}${(page || 1) + 1}`}>
      <a>
        <ContainedButton>Next</ContainedButton>
      </a>
    </Link>
  </div>
);

export default Navigation;
