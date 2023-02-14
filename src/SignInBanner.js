import React from 'react';
import { Link } from 'react-router-dom';

function SignInBanner() {
  return (
    <div
      style={{
        width: '100%',
        height: '130px',
        backgroundColor: '#f7efe7',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          color: 'red',
          margin: '0',
          padding: '10px',
          fontWeight: 'bold',
          fontSize: '0.9em',
        }}
      >
        Members get free delivery and 10% off first purchase. Not a member yet?
        <br />
        Join now, it's free.
      </p>

      <p style={{ fontSize: '0.7em', margin: '0' }}>
        Members get free standard delivery and Click & Collect for orders over
        €20.
      </p>
      <Link to='/register'>
        <button
          style={{
            backgroundColor: '#f7efe7',
            border: '0.6px solid',
            cursor: 'pointer',
            height: '30px',
            margin: '10px',
            fontWeight: 'bold',
          }}
        >
          Become a member
        </button>
      </Link>
    </div>
  );
}

export default SignInBanner;
