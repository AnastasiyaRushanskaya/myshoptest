import React from 'react';

function ProductImage({ src }) {
  return (
    <img
      src={src}
      style={{
        width: '50%',
        height: '100%',
      }}
    ></img>
  );
}

export default ProductImage;
