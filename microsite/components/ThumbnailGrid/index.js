
import theme from '../../styles/theme';

const ThumbnailGrid = ({ children }) => {
  const renderElements = () => {
    const gridElements = children.map(element => (
      <div key={element.key} className='grid-element'>
        <div className='title'>{element.props.title}</div>
        <div className='thumbnail'>
          {element}
        </div>
        <div className='links'>
          <a href={element.props.liveDemo} target='_blank' rel='noopener noreferrer'>
            <span className='desktop'>Live Demo</span>
            <span className='mobile'>Live</span>
          </a>
          <a href={element.props.sourceCode} target='_blank' rel='noopener noreferrer'>
            <span className='desktop'>Source Code</span>
            <span className='mobile'>Source</span>
          </a>
        </div>
        <style jsx>{`
          .grid-element {
            position: relative;
          }
          .thumbnail {
            background: rgba(0, 140, 186, 0.5);
            height: 152px;
            animation: animateGrid 0.5s;
            padding: 4px;
            ${theme.imageHoveringEffect}
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          @keyframes animateGrid {
            from {
              opacity:0;
            }
            to {
              opacity:1;
            }
          }
          .title {
            position: absolute;
            top: -72px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            min-height: 60px;
            text-align: center;
            padding: 0 4px;
            font-size: 16px;
            font-weight: 900;
            text-shadow: 2px 2px 4px #000000;
          }
          .links {
            display: flex;
            font-size: 16px;
            margin-top: 8px;
            padding: 0 12px;
            justify-content: space-between;
          }
          .links .desktop {
            display: none;
          }
          .links a:hover {
            text-decoration: underline;
          }
          @media screen and (min-width: ${theme.breakpoint.mobile}px) {
            .thumbnail {
              height: 172px;
            }
            .links .mobile {
              display: none;
            }
            .links .desktop {
              display: block;
            }
          }
        `}</style>
      </div>
    ));
    return gridElements;
  };

  return (
    <>
      <div className='grid-container'>{renderElements()}</div>
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-column-gap: 10px;
          margin-top: 36px;
          grid-row-gap: 76px;
          grid-template-columns: auto auto;
        }
        @media screen and (min-width: ${theme.breakpoint.mobile}px) {
          .grid-container {
            grid-column-gap: 20px;
            grid-row-gap: 72px;
          }
        }
        @media screen and (min-width: ${theme.breakpoint.tablet}px) {
          .grid-container {
            grid-column-gap: 40px;
            grid-row-gap: 80px;
            grid-template-columns: auto auto auto auto;  
          }
        }
      `}</style>
    </>
  );
};

export default ThumbnailGrid;
