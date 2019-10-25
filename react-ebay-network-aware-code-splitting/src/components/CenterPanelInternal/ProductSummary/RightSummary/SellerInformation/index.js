
import React from 'react';

import WhiteCardWrapper from '../../../../../hoc/WhiteCardWrapper';
import './seller-information.css';

const SellerInformation = () => {
  return (
    <WhiteCardWrapper className='seller-information'>
      <div className='title bold-font-color no-veritcal-spacing'>Seller information</div>
      <div className='flexbox no-veritcal-spacing'>
        <a className='no-decoration' href='https://www.ebay.com/usr/banginkicks?_trksid=p2047675.l2559'><strong>banginkicks</strong>&nbsp;</a>
        <span>(</span>
        <a className='no-decoration' href='http://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback&userid=banginkicks&iid=152669264255&ssPageName=VIP:feedback&ftab=FeedbackAsSeller&rt=nc&_trksid=p2047675.l2560'>30614</a>
        <span className='star-mark' />
        <span>)</span>
      </div>
      <div className='bold-font-color'>99.2% Positive feedback</div>
      <hr />
      <div className='flexbox'>
        <span className='heart-mark' />
        <a href='https://www.ebay.com/itm/Nike-Flex-Run-2016-Mens-Runinng-Shoe-Crimson-Black-830369-601-sz-11/152669264255?var=452220570389&hash=item238bcc197f:m:m8JGGvA8IYbBZVTWARQvq5g#'>
          Save this Seller
        </a>
      </div>
      <div>
        <a href='https://contact.ebay.com/ws/eBayISAPI.dll?ShowSellerFAQ&iid=152669264255&requested=banginkicks&redirect=0&frm=284&rt=nc&_trksid=p2047675.l1499&ssPageName=PageSellerM2MFAQ_VI'>
          Contact seller
        </a>
      </div>
      <div>
        <a href='https://www.ebay.com/str/Banginkicks?_trksid=p2047675.l2563'>
          Visit store
        </a>
      </div>
      <div>
        <a href='https://www.ebay.com/sch/banginkicks/m.html?item=152669264255&hash=item238bcc197f%3Am%3Am8JGGvA8IYbBZVTWARQvq5g&var=452220570389&rt=nc&_trksid=p2047675.l2562'>
          See other items
        </a>
      </div>
    </WhiteCardWrapper>
  );
};

export default SellerInformation;
