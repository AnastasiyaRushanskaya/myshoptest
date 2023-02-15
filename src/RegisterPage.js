import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import DateOfBirthBox from './DateOfBirthBox';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import EmailAndPasswordInputBox from './EmailAndPasswordInputBox';
import LoginAndRegisterCheckbox from './LoginAndRegisterCheckbox';
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
      <LoginAndRegisterHeader
        text='Become a member'
        desctription='Become a member — don’t miss out on deals, offers, discounts and bonus
vouchers.'
      />
      <div
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      >
        <EmailAndPasswordInputBox inputBoxName='Email' />
        <EmailAndPasswordInputBox inputBoxName='Create password' />
        <DateOfBirthBox />
        <LoginAndRegisterCheckbox
          text='Yes, email me offers, style updates, and special invites to sales &
        events'
        />

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
          buttonBorder='none'
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
