import React from 'react';
import { Link } from 'react-router-dom';
import LoginAndRegisterInputBox from './LoginAndRegisterInputBox';
import CustomButton from './CustomButton';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import LoginAndRegisterCheckbox from './LoginAndRegisterCheckbox';
import LoginAndRegisterInputBoxName from './LoginAndRegisterInputBoxName';

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
        <LoginAndRegisterInputBoxName name='Email' />
        <LoginAndRegisterInputBox width='100%' />
        <LoginAndRegisterInputBoxName name="Create password'" />
        <LoginAndRegisterInputBox width='100%' />
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
          width='100%'
          height='40px'
          buttonBorder='none'
          buttonColor='black'
          buttonTextColor='#faf9f8'
        />
        <Link to='/register'>
          <CustomButton
            text='Become a member'
            width='100%'
            height='40px'
            buttonBorder='1px solid black'
            buttonColor='#faf9f8'
            buttonTextColor='black'
          />
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
