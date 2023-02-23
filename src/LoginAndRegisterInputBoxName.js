import React from 'react';

function LoginAndRegisterInputBoxName({ name, color }) {
  return (
    <span style={{ fontSize: '0.7em' }}>
      {name}
      <sup style={{ color: color }}>*</sup>
    </span>
  );
}

export default LoginAndRegisterInputBoxName;
