
const Backdrop = ({ isShown, onClick }) => (
  isShown ? (
    <>
      <div className='backdrop' onClick={onClick} />
      <style jsx>{`
        .backdrop {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  ) : null
);

export default Backdrop;
