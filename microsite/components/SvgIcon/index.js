
const SvgIcon = ({ name, width, height, onClick, withHoverEffect }) => (
  <button
    id='svg-icon'
    aria-label='icon'
    className={withHoverEffect ? 'svg-icon-container' : 'svg-icon-container__no-hover-effect'}
    onClick={onClick}>
    <div className='svg-icon'></div>
    <style jsx>{`
      .svg-icon-container, .svg-icon-container__no-hover-effect  {
        position: relative;
        cursor: pointer;
        padding: 12px;
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: transparent;
        fill: currentColor;
      }
      .svg-icon-container:hover:after {
        position: absolute;
        top: calc(50% - 50%);
        left: calc(50% - 50%);
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0.08;
        border-radius: 50%;
        transition: opacity 15ms linear, background-color 15ms linear;
        pointer-events: none;
        content: "";
      }
      .svg-icon {
        width: ${width || '24px'};
        height: ${height || '24px'};
        background-image: url(/static/images/icons/${name}.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    `}</style>
  </button>
);

export default SvgIcon;
