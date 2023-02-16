import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

function SignInBanner() {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        marginBottom: '15px',
        backgroundColor: '#f7efe7',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          margin: '0',
          padding: '10px',
          color: 'red',
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
        <CustomButton
          text='Become a member'
          width='30%'
          height='30px'
          buttonColor='#f7efe7'
          buttonTextColor='black'
          buttonBorder='0.6px solid black'
        />
      </Link>
    </div>
  );
}

export default SignInBanner;
