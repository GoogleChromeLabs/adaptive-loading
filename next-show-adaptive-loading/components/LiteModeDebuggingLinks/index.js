
import { useRouter } from 'next/router';

import { ADAPTIVE_MODE } from '../../utils/constants';
import { serializeToQueryParam } from '../../utils/helpers';

const LiteModeDebuggingLinks = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <a href={serializeToQueryParam({...router.query, mode: ADAPTIVE_MODE.LITE}, router.pathname)}>
          Direct link to force slow mode
        </a>
        <a href={serializeToQueryParam({...router.query, mode: ADAPTIVE_MODE.FULL}, router.pathname)}>
          Direct link to force normal mode
        </a>
      </div>
      <style jsx>{`
        padding: 16px 24px;
        margin: 8px 12px;
        a {
          font-size: 1.25rem;
          text-decoration: underline;
        }
        a:first-child {
          margin-right: 24px;
        }
      `}</style>
    </>
  );
};

export default LiteModeDebuggingLinks;
