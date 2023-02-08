import React from 'react';

function CustomButton({
  width,
  height,
  top,
  right,
  left,
  bottom,
  text,
  clickHandler,
  id,
}) {
  return (
    <button
      onClick={() => clickHandler(id)}
      style={{
        cursor: 'pointer',
        display: 'block',
        position: 'absolute',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        width: width,
        height: height,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
      }}
    >
      <i className='bi bi-bag'></i> {text}
    </button>
  );
}

export default CustomButton;