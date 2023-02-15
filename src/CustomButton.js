import React from 'react';

function CustomButton({
  width,
  height,
  text,
  clickHandler,
  iconName,
  marginLeft,
  buttonColor,
  buttonTextColor,
  buttonBorder,
}) {
  return (
    <button
      onClick={clickHandler}
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        width: width,
        marginTop: '20px',
        marginLeft: marginLeft,
        height: height,
        backgroundColor: buttonColor,
        color: buttonTextColor,
        border: buttonBorder,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
      }}
    >
      <i className={iconName}></i> {text}
    </button>
  );
}

export default CustomButton;

// ('bi bi-bag');
