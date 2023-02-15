import React from 'react';

function LoginAndRegisterHeader({ text, desctription }) {
  return (
    <>
      <h4 style={{ marginTop: '0px', textAlign: 'center' }}>{text}</h4>
      <p style={{ fontSize: '0.7em', textAlign: 'center' }}>{desctription}</p>
    </>
  );
}

export default LoginAndRegisterHeader;
