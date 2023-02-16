import React from 'react';
import { useState } from 'react';

const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QuantityOption({ border, quantityValue, changeQuantityValue }) {
  const [quantity, setQuantity] = useState(quantityArray);
  // const [quantityValue, setQuantityValue] = useState('');

  const QuantityOptions = quantity.map((QuantityOption, index) => {
    return <option key={index}>{QuantityOption}</option>;
  });
  return (
    <select
      value={quantityValue}
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
