import React from 'react';
import EmailAndPasswordInputBox from './EmailAndPasswordInputBox';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import LoginAndRegisterCheckbox from './LoginAndRegisterCheckbox';

function LoginPage() {
  return (
    <div>
      <LoginAndRegisterHeader
        text='Sign In'
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
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <LoginAndRegisterCheckbox text='Remember me' />
          <Link to='/requestSignin' className='linkStyles'>
            <p
              style={{
                fontSize: '0.8em',
              }}
            >
              Forgot password?
            </p>
          </Link>
        </div>

        <CustomButton
          text='Sign in'
          height='40px'
          width='100%'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttonBorder='none'
        />
        <Link to='/register'>
          <CustomButton
            text='Become a member'
            height='40px'
            width='100%'
            buttonColor='#faf9f8'
            buttonTextColor='black'
            buttonBorder='1px solid black'
          />
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
