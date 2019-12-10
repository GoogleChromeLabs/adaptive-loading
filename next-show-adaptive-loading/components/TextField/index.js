
const TextField = ({ type, ...rest }) => (
  <>
    <input type='text' {...rest} />
    <style jsx>{`
      font-family: inherit;
      font-size: inherit;
      width: 100%;
      height: 32px;
      padding: 0 8px;
      color: inherit;
      background-color: rgba(255, 255, 255, .25);
      border: 1px solid rgba(0, 0, 0, .25);
      border-radius: 2px;
    `}</style>
  </>
);

export default TextField;
