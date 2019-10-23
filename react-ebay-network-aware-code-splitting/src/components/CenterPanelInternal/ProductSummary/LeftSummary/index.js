
import React from 'react';

import PropertyField from '../../PropertyField';
import {
  ConditionPropertyValue,
  USSizePropertyValue,
  QuantityPropertyValue,
  ShippingPropertyValue,
  DeliveryPropertyValue,
  PaymentsPropertyValue,
  ReturnsPropertyValue
} from './assemblies';
import ShoppingCard from './ShoppingCard';
import './left-summary.css';

const upperPropertyFields = [
  {
    label: 'Condition',
    value: <ConditionPropertyValue />
  },
  {
    label: '',
    value: null
  },
  {
    label: 'US Size',
    value: <USSizePropertyValue />
  },
  {
    label: 'Quantity',
    value: <QuantityPropertyValue />
  }
];

const lowerPropertyFields = [
  {
    label: 'Shipping',
    value: <ShippingPropertyValue />,
    verticalAlignTop: true
  },
  {
    label: 'Delivery',
    value: <DeliveryPropertyValue />,
    verticalAlignTop: true
  },
  {
    label: 'Payments',
    value: <PaymentsPropertyValue />
  },
  {
    label: 'Returns',
    value: <ReturnsPropertyValue />
  }
];

const LeftSummary = () => {
  return (
    <div className='left-summary generic-font-color'>
      <div className='product-name bold-font-color'>Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11</div>
      <div className='upper-property-fields'>
        { upperPropertyFields.map(propertyField => (
          <PropertyField
            key={propertyField.label}
            verticalAlignTop={propertyField.verticalAlignTop}
            label={propertyField.label}
            value={propertyField.value} />
        )) }
      </div>
      <ShoppingCard />
      <div className='lower-property-fields'>
        { lowerPropertyFields.map(propertyField => (
          <PropertyField
            key={propertyField.label}
            verticalAlignTop={propertyField.verticalAlignTop}
            label={propertyField.label}
            value={propertyField.value} />
        )) }
      </div>
    </div>
  );
};

export default LeftSummary;
