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
      className='d-inline-block'
      onClick={clickHandler}
      style={{
        width: width,
        height: height,
        marginTop: '15px',
        marginLeft: marginLeft,
        border: buttonBorder,
        borderRadius: '3px',
        backgroundColor: buttonColor,
        color: buttonTextColor,
        cursor: 'pointer',
      }}
    >
      <i className={iconName}></i> {text}
    </button>
  );
}

export default CustomButton;
