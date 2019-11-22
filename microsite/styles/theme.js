
const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, monospace',
    roboto: '"Roboto", Arial, sans-serif'
  },
  colors: {
    text: '#fff',
    subText: 'rgb(214, 216, 218)',
    anchorTextOnDark: '#3e7bb7',
    background: '#202124',
    headerBackground: '#212121'
  },
  linkHoveringEffect: `
    transition: color .1s cubic-bezier(.4,0,.2,1);
  `,
  imageHoveringEffect: `
    box-shadow: 0 0 0 1px rgba(255,255,255,.16);
    transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
  `,
  breakpoint: {
    mobile: 521,
    tablet: 921
  }
};

export default theme;
