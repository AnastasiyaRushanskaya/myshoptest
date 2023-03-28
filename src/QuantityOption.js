import React from 'react';
import { Form } from 'react-bootstrap';

const quantityArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function QuantityOption({ quantity, changeQuantityValue }) {
  const QuantityOptions = quantityArray.map((QuantityOption, index) => {
    return <option key={index}>{QuantityOption}</option>;
  });
  return (
    <Form.Select size='sm' value={quantity} onChange={changeQuantityValue}>
      {QuantityOptions}
    </Form.Select>
  );
}

export default QuantityOption;
