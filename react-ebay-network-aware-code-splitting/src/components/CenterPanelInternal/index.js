
import React, { useState, lazy, Suspense } from 'react';

import ProductSummary from './ProductSummary';
import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import AaQAAOSwawpXqRI0_400 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l400.jpg';
import AaQAAOSwawpXqRI0_1600 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l1600.jpg';
import './center-panel-internal.css';

const Product = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('effectiveType => ', effectiveType);
      switch (effectiveType) {
        case '4g':
          return import(/* webpackChunkName: "magnific-product" */ './MagnificProduct');
        case '3g':
        case '2g':
        case 'slow-2g':
          return import(/* webpackChunkName: "simple-product" */ './SimpleProduct');
        default:
          return import(/* webpackChunkName: "magnific-product" */ './MagnificProduct');
      }
    }
  );
});

const CenterPanelInternal = () => {
  const [isHoverOnProduct, setIsHoverOnProduct] = useState(false);

  const setIsHoverOnProductHandler = isHoverOnProduct => {
    setIsHoverOnProduct(isHoverOnProduct);
  };
  return (
    <div className='center-panel-internal'>
      <div className='picture-panel'>
        <LazyLoadingErrorBoundary>
          <Suspense fallback={<>Loading...</>}>
            <Product
              setIsHoverOnProduct={setIsHoverOnProductHandler}
              altMessage="Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11"
              smallImageSrc={AaQAAOSwawpXqRI0_400}
              largeImageSrc={AaQAAOSwawpXqRI0_1600}
              externalRender={{
                enlargedImagePortalId: 'enlarged-picture-panel',
                enlargedImageContainerDimensions: isHoverOnProduct ? {
                  width: '185%',
                  height: '120%'
                } : {
                  width: 0,
                  height: 0
                }
              }} />
          </Suspense>
        </LazyLoadingErrorBoundary>
      </div>
      <div id='enlarged-picture-panel' className={`picture-sibling-panel ${!isHoverOnProduct ? 'display-none' : ''}`} />
      <div className={`picture-sibling-panel ${isHoverOnProduct ? 'display-none' : ''}`}>
        <ProductSummary />
      </div>
    </div>
  );
};

export default CenterPanelInternal;
