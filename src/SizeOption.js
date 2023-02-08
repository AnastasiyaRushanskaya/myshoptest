import React, { useState } from 'react';

const sizesArray = ['Select size', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

function SizeOption({ top, border }) {
  const [sizes, setSizes] = useState(sizesArray);
  const [value, setSizeValue] = useState('');

  const sixeOptions = sizes.map((sizeOption, index) => {
    return <option key={index}>{sizeOption}</option>;
  });
  return (
    <select
      value={value}
      onChange={(event) => setSizeValue(event.target.value)}
      style={{
        position: 'absolute',
        top: top,
        left: '86px',
        height: '20px',
        borderRadius: '5px',
        outline: 'none',
        border: border,
        backgroundColor: '#faf9f8',
      }}
    >
      {sixeOptions}
    </select>
  );
}

export default SizeOption;
