import React from 'react';

function LoginAndRegisterHeader({ text, desctription }) {
  return (
    <>
      <h4 className='text-align-center' style={{ marginTop: '0px' }}>
        {text}
      </h4>
      <p className='text-align-center' style={{ fontSize: '0.7em' }}>
        {desctription}
      </p>
    </>
  );
}

export default LoginAndRegisterHeader;
