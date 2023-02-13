import React from 'react';

function ProductImage({ src }) {
  return (
    <div>
      <img
        src={src}
        style={{
          width: '50%',
          height: '100%',
          float: 'left',
          display: 'inline-block',
        }}
      ></img>
    </div>
  );
}

export default ProductImage;
