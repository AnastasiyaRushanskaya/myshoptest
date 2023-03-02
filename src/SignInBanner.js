import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

function SignInBanner() {
  return (
    <div
      className='text-align-center'
      style={{
        width: '100%',
        height: '120px',
        marginBottom: '10px',
        backgroundColor: '#f7efe7',
      }}
    >
      <p
        className='no-margin font-weight-bold'
        style={{
          padding: '5px',
          color: 'red',
          fontSize: '0.9em',
        }}
      >
        Members get free delivery and 10% off first purchase. Not a member yet?
        <br />
        Join now, it's free.
      </p>

      <p className='no-margin' style={{ fontSize: '0.7em' }}>
        Members get free standard delivery and Click & Collect for orders over
        €20.
      </p>
      <Link to='/register'>
        <CustomButton
          text='Become a member'
          width='30%'
          height='30px'
          buttonBorder='0.6px solid black'
          buttonColor='#f7efe7'
          buttonTextColor='black'
        />
      </Link>
    </div>
  );
}

export default SignInBanner;
