import React from 'react';
import { useState } from 'react';

const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QuantityOption({ quantity, changeQuantityValue, border }) {
  const QuantityOptions = quantityArray.map((QuantityOption, index) => {
    return <option key={index}>{QuantityOption}</option>;
  });
  return (
    <select
      value={quantity}
      onChange={changeQuantityValue}
      style={{
        height: '20px',
        marginBottom: '20px',
        marginTop: '25px',
        outline: 'none',
        border: border,
        backgroundColor: '#faf9f8',
      }}
    >
      {QuantityOptions}
    </select>
  );
}

export default QuantityOption;
