import React from 'react';

const sizesArray = ['Select size', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

function SizeOption({ border, selectSize, size }) {
  const sizeOptions = sizesArray.map((sizeOption, index) => {
    return (
      <option key={index} value={index !== 0 ? sizeOption : ''}>
        {sizeOption}
      </option>
    );
  });
  return (
    <select
      value={size}
      onChange={selectSize}
      style={{
        // marginBottom: '40px',
        // marginTop: '45px',
        height: '20px',
        borderRadius: '5px',
        outline: 'none',
        border: border,
        backgroundColor: '#faf9f8',
      }}
    >
      {sizeOptions}
    </select>
  );
}

export default SizeOption;
