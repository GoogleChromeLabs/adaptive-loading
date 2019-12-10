
const Banner = ({ bannerImage, children }) => (
  <>
    { bannerImage ? (
      <div className='image-background'>
        <div className='color-background'>
          {children}
        </div>
      </div>
    ) : (
      <div className='color-background'>
        {children}
      </div>
    ) }
    <style jsx>{`
      .image-background {
        background-image: url(${bannerImage});
        background-size: cover;
        background-position: center;
        font-size: 32px;
      }
      .color-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
        background-color: rgba(51,51,51,0.8);
        min-height: 100vh;
        background-size: cover;
        background-position: center;
      }
    `}</style>
  </>
);

export default Banner;
