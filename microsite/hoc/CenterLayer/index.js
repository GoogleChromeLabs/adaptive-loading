
const CenterLayer = ({ children }) => (
  <div className='center-layer'>
    {children}
    <style jsx>{`
      .center-layer {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}</style>
  </div>
);

export default CenterLayer;
