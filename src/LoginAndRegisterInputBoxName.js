import React from 'react';

function LoginAndRegisterInputBoxName({ name }) {
  return (
    <span style={{ fontSize: '0.7em' }}>
      {name}
      <sup style={{ color: 'red' }}>*</sup>
    </span>
  );
}

export default LoginAndRegisterInputBoxName;
