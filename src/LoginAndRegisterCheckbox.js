import React from 'react';

function LoginAndRegisterCheckbox({ text }) {
  return (
    <div
      style={{
        marginTop: '15px',
        textAlign: 'justify',
        fontSize: '0.8em',
      }}
    >
      <input type='checkbox' id='checkbox' style={{ marginLeft: '0' }} />
      <label htmlFor='checkbox'>{text}</label>
    </div>
  );
}

export default LoginAndRegisterCheckbox;
