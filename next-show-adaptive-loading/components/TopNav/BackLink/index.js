
import { useContext } from 'react';
import { useRouter } from 'next/router'

import { AppContext } from '../../../contexts';

const BackLink = () => {
  const { theme } = useContext(AppContext);
  const router = useRouter();
  const backHandler = event => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <a href='#' onClick={backHandler}>
        <h3>Back</h3>
      </a>
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

export default BackLink;
