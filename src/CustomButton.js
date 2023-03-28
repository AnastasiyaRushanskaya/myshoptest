import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButton({ text, clickHandler, iconName, variant, width }) {
  return (
    <Button
      style={{ width: width }}
      variant={variant}
      className='fs-md'
      onClick={clickHandler}
    >
      <i className={iconName}></i> {text}
    </Button>
  );
}

export default CustomButton;
