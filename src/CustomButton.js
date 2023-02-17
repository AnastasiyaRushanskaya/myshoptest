import React from 'react';

function CustomButton({
  text,
  clickHandler,
  iconName,
  width,
  height,
  marginLeft,
  buttonBorder,
  buttonColor,
  buttonTextColor,
}) {
  return (
    <button
      onClick={clickHandler}
      style={{
        display: 'inline-block',
        width: width,
        height: height,
        marginTop: '15px',
        marginLeft: marginLeft,
        border: buttonBorder,
        borderRadius: '3px',
        cursor: 'pointer',
        backgroundColor: buttonColor,
        color: buttonTextColor,
        fontWeight: 'bold',
      }}
    >
      <i className={iconName}></i> {text}
    </button>
  );
}

export default CustomButton;
