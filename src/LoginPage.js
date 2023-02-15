import React from 'react';
import RegisterInputBox from './RegisterInputBox';
import CustomButton from './CustomButton';

function LoginPage() {
  return (
    <div>
      <h4 style={{ marginTop: '0px', textAlign: 'center' }}>Sign in</h4>
      <p style={{ fontSize: '0.7em', textAlign: 'center' }}>
        Become a member — don’t miss out on deals, offers, discounts and bonus
        vouchers.
      </p>

      <div
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      >
        <RegisterInputBox inputBoxName='Email' />
        <RegisterInputBox inputBoxName='Create password' />
        <CustomButton
          text='Sign in'
          height='40px'
          width='100%'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttornBorder='none'
        />
        <CustomButton
          text='Become a member'
          height='40px'
          width='100%'
          buttonColor='#faf9f8'
          buttonTextColor='black'
          buttornBorder='1px solid black'
        />
      </div>
    </div>
  );
}

export default LoginPage;
