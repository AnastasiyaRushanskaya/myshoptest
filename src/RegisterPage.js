import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import DateOfBirthBox from './DateOfBirthBox';
import RegisterInputBox from './RegisterInputBox';
import SuscribeForNewsBox from './SuscribeForNewsBox';
import TermsAndConditionsBox from './TermsAndConditionsBox';

function RegisterPage() {
  const [isVisibleTermsAndConditionsBox, setIsVisibleTermsAndConditionsBox] =
    useState(false);

  let termsAndConditionsBox;
  if (isVisibleTermsAndConditionsBox) {
    termsAndConditionsBox = <TermsAndConditionsBox />;
  }

  return (
    <div>
      <h4 style={{ marginTop: '0px', textAlign: 'center' }}>Become a member</h4>
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
        <DateOfBirthBox />
        <div
          style={{
            fontSize: '0.8em',
            paddingTop: '15px',
            textAlign: 'justify',
          }}
        >
          <SuscribeForNewsBox />
        </div>

        <p style={{ fontSize: '0.6em', textAlign: 'justify' }}>
          By clicking ‘Become a member’, I agree to the H&M Membership{' '}
          <a
            className='linkStyles'
            onClick={() =>
              setIsVisibleTermsAndConditionsBox(!isVisibleTermsAndConditionsBox)
            }
          >
            {termsAndConditionsBox}
            Terms and conditions.
          </a>
        </p>
        <CustomButton
          text='Become a member'
          height='40px'
          width='100%'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttornBorder='none'
        />

        <Link to='/login' className='linkStyles'>
          <p
            style={{
              fontSize: '0.7em',
              fontWeight: 'bold',
              textAlign: 'center',
              textDecoration: 'underline',
            }}
          >
            Back to Sign in
          </p>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
