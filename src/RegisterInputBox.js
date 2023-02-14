import React from 'react';

function RegisterInputBox({ inputBoxName }) {
  return (
    <>
      <span style={{ fontSize: '0.7em' }}>
        {inputBoxName}
        <sup style={{ color: 'red' }}>*</sup>
      </span>
      <br />
      <input
        style={{
          width: '100%',
          height: '30px',
          boxSizing: 'border-box',
        }}
      ></input>
    </>
  );
}

export default RegisterInputBox;
