import React from 'react';
import { useState } from 'react';

const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QuantityOption({ top, border }) {
  const [quantity, setQuantity] = useState(quantityArray);
  const [value, setQuantityValue] = useState('');

  const QuantityOptions = quantity.map((QuantityOption, index) => {
    return <option key={index}>{QuantityOption}</option>;
  });
  return (
    <select
      value={value}
      onChange={(event) => setQuantityValue(event.target.value)}
      style={{
        position: 'absolute',
        top: top,
        left: '86px',
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
