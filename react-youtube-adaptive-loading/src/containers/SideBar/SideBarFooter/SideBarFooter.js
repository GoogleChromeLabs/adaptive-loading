import React from 'react';
import './SideBarFooter.scss'

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className='footer-block'>
        <div><a href='https://github.com/marvtron/youtube-react' target='_blank' rel='noreferrer noopener'>View GitHub repo</a></div>
      </div>
      <div className='footer-block'>
        <div>© marvtrondev - A Youtube clone for educational purposes under fair use.</div>
      </div>
    </React.Fragment>
  );
}