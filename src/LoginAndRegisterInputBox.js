import React from 'react';

function LoginAndRegisterInputBox({
  value,
  changeHandler,
  width,
  placeholder,
}) {
  return (
    <input
      value={value}
      onChange={(event) => changeHandler(event.target.value)}
      placeholder={placeholder}
      style={{
        width: width,
        height: '40px',
        boxSizing: 'border-box',
        border: '0.3px solid grey',
      }}
    ></input>
  );
}

export default LoginAndRegisterInputBox;
