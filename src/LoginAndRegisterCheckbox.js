import React from 'react';

function LoginAndRegisterCheckbox({ text }) {
  return (
    <div
      style={{
        fontSize: '0.8em',
        textAlign: 'justify',
        marginTop: '15px',
      }}
    >
      <input type='checkbox' id='checkbox' style={{ marginLeft: '0' }} />
      <label htmlFor='checkbox'>{text}</label>
    </div>
  );
}

export default LoginAndRegisterCheckbox;
