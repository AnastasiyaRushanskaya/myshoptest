import React from 'react';

function CustomButton({ width, height, text, clickHandler, iconName }) {
  return (
    <button
      onClick={clickHandler}
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        width: width,
        marginTop: '20px',
        height: height,
      }}
    >
      <i className={iconName}></i> {text}
    </button>
  );
}

export default CustomButton;

// ('bi bi-bag');
