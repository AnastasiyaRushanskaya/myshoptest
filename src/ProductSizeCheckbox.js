import React from 'react';

function ProductSizeCheckBox({ checked, changeProductboxSize }) {
  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        // backgroundColor: 'red',
        textAlign: 'end',
      }}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={changeProductboxSize}
      />
    </div>
  );
}

export default ProductSizeCheckBox;
