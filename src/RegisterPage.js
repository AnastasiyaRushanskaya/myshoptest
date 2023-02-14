import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import DateOfBirthBox from './DateOfBirthBox';
import RegisterInputBox from './RegisterInputBox';

function RegisterPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <h4 style={{ marginTop: '0px' }}>Become a member</h4>
      <p style={{ fontSize: '0.7em' }}>
        Become a member — don’t miss out on deals, offers, discounts and bonus
        vouchers.
      </p>
      <div
        style={{
          textAlign: 'left',
          width: '50%',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <RegisterInputBox inputBoxName='Email' />
        <RegisterInputBox inputBoxName='Create password' />
        <DateOfBirthBox />
        <CustomButton text='Become a member' height='30px' width='100%' />

        <Link to='/login' className='linkStyles'>
          <span style={{ fontSize: '0.7em', fontWeight: 'bold' }}>
            Back to Sign in
          </span>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
