
import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Modal from 'react-responsive-modal';

import SimpleProduct from '../SimpleProduct';
import './magnific-product.css';

const MagnificProduct = ({ smallImageSrc, largeImageSrc, altMessage, externalRender, setIsHoverOnProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseHandler = () => {
    setIsModalOpen(false);
  };
  const onOpenHandler = () => {
    setIsHoverOnProduct(false);
    setIsModalOpen(true);
  };
  return (
    <>
      <div onClick={onOpenHandler}>
        <div className='magnific' onMouseEnter={() => setIsHoverOnProduct(true)} onMouseLeave={() => setIsHoverOnProduct(false)}>
          <ReactImageMagnify {...{
            smallImage: {
                alt: altMessage,
                isFluidWidth: true,
                src: smallImageSrc
            },
            largeImage: {
                src: largeImageSrc,
                width: 1200,
                height: 1800
            },
            imageClassName: 'small-image',
            ...externalRender
          }} />
        </div>
        <div className='simple'>
          <SimpleProduct smallImageSrc={smallImageSrc} altMessage={altMessage} />
        </div>
      </div>
      <Modal
        styles={{
          modal: {
            maxWidth: 'unset'
          }
        }}
        open={isModalOpen}
        onClose={onCloseHandler}
        center>
        <img width='100%' height='auto' src={largeImageSrc} alt={altMessage} />
      </Modal>
    </>
  );
};

export default MagnificProduct;
