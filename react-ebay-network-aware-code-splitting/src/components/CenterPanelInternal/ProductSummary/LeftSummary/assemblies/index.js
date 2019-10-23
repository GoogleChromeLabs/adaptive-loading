
import React from 'react';

const QuestionTooltipMark = () => (
  <div
    style={{
      backgroundImage: 'url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_18.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-215px -406px',
      cursor: 'pointer',
      width: '16px',
      height: '16px'
    }} />
);

const LineWrapper = ({ className, children }) => (
  <div
    className={className}
    style={{
      marginBottom: '4px',
      display: 'flex',
      alignItems: 'center'
    }}>
    {children}
  </div>
);

const ConditionPropertyValue = () => (
  <strong className='bold-font-color'>New with box</strong>
);

const USSizePropertyValue = () => (
  <select
    defaultValue='11'
    style={{
      border: '1px solid lightgray',
      width: '190px',
      borderRadius: '3px'
    }}>
    <option value='select'>- Select -</option>
    <option value='11'>11</option>
  </select>
);

const QuantityPropertyValue = () => {
  const dummyQuantity = 1;
  return (
    <>
      <input
        style={{
          width: '30px',
          padding: '6px',
          border: '1px solid #999',
          borderRadius: '4px',
          marginRight: '48px'
        }}
        id='quantity'
        name='quantity'
        type='number'
        defaultValue={dummyQuantity} />
      <span>{`${dummyQuantity} available`}</span>
    </>
  );
};

const ShippingPropertyValue = () => (
  <>
    <LineWrapper>
      <strong className='bold-font-color'>$56.00</strong>
      <span className='ellipsis'>&nbsp;&nbsp;&nbsp;USPS Priority Mail Express International</span>
      <a
        className='generic-font-color minor-font-size ellipsis'
        href='https://www.ebay.com/itm/Nike-Flex-Run-2016-Mens-Runinng-Shoe-Crimson-Black-830369-601-sz-11/152669264255?var=452220570389&hash=item238bcc197f:m:m8JGGvA8IYbBZVTWARQvq5g#shpCntId'>
        &nbsp;| See details
      </a>
    </LineWrapper>
    <div className='minor-font-size'>
      <LineWrapper>
        <span className='ellipsis'>International items may be subject to customs processing and additional charges.</span>
        <QuestionTooltipMark />
      </LineWrapper>
      <LineWrapper>Item location: BKicks, United States</LineWrapper>
      <LineWrapper>Ships to: Worldwide</LineWrapper>
    </div>
  </>
);

const DeliveryPropertyValue = () => (
  <>
    <LineWrapper>
      <span className='ellipsis'>Estimated between&nbsp;</span>
      <strong className='bold-font-color ellipsis'>Wed. Nov. 6 and Tue. Dec. 3</strong>
    </LineWrapper>
    <div className='minor-font-size'>
      <LineWrapper>
        <span className='ellipsis'>Seller ships within 1 day after&nbsp;</span>
        <a
          style={{color: 'rgb(106, 41, 185)'}}
          className='ellipsis'
          href='https://pages.ebay.com/ru/en-us/help/buy/contextual/domestic-handling-time.html'>
          receiving cleared payments.
        </a>
        <QuestionTooltipMark />
      </LineWrapper>
    </div>
  </>
);

const PaymentsPropertyValue = () => {
  const payments = [
    {
      title: 'PayPal',
      backgroundPosition: '-168px 0'
    },
    {
      title: 'Visa',
      backgroundPosition: '0 0'
    },
    {
      title: 'Master Card',
      backgroundPosition: '-42px 0'
    },
    {
      title: 'Amex',
      backgroundPosition: '-84px 0'
    },
    {
      title: 'Discover',
      backgroundPosition: '-126px 0'
    },
  ];

  return (
    <>
      { payments.map(payment => (
        <img
          key={payment.title}
          src='https://ir.ebaystatic.com/cr/v/c1/s_1x2.png'
          title={payment.title}
          alt={payment.alt}
          style={{
            marginRight: '4px',
            backgroundPosition: payment.backgroundPosition,
            backgroundImage: 'url(https://ir.ebaystatic.com/rs/v/wys5smfghu0lpeesxpvue34coyx.png)',
            backgroundRepeat: 'no-repeat',
            width: '41px',
            height: '26px'
          }} />
      )) }
    </>
  );
};

const ReturnsPropertyValue = () => (
  <LineWrapper>
    <span className='ellipsis'>30 day returns. Buyer pays for return shipping</span>
    <a
      className='generic-font-color minor-font-size ellipsis'
      href='https://www.ebay.com/itm/Nike-Flex-Run-2016-Mens-Runinng-Shoe-Crimson-Black-830369-601-sz-11/152669264255?var=452220570389&hash=item238bcc197f:m:m8JGGvA8IYbBZVTWARQvq5g#shpCntId'>
      &nbsp;| See details
    </a>
  </LineWrapper>
);

export {
  ConditionPropertyValue,
  USSizePropertyValue,
  QuantityPropertyValue,
  ShippingPropertyValue,
  DeliveryPropertyValue,
  PaymentsPropertyValue,
  ReturnsPropertyValue
};
