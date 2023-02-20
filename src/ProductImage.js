import React from 'react';

function ProductImage({ src, src2, imageChange }) {
  return (
    <img
      src={imageChange ? src2 : src}
      style={{
        width: '100%',
        height: '100%',
      }}
    ></img>
  );
}
export default ProductImage;
