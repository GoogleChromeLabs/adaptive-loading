
const Error = ({ statusCode }) => (
  <p>
    {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
