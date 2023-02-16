import React from 'react';

function ProductImage({ src }) {
  return (
    <div>
      <img
        src={src}
        style={{
          float: 'left',
          display: 'inline-block',
          width: '50%',
          height: '100%',
        }}
      ></img>
    </div>
  );
}

export default ProductImage;
