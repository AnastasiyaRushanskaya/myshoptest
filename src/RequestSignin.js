import React from 'react';
import EmailAndPasswordInputBox from './EmailAndPasswordInputBox';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import CustomButton from './CustomButton';

function RequestSignin() {
  return (
    <div>
      <LoginAndRegisterHeader
        text='Forgot password?'
        desctription='Please enter the email address you used to create your account, and we will send you a link to reset your password.'
      />
      <div
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      >
        <EmailAndPasswordInputBox inputBoxName='Email' />
        <CustomButton
          text='Submit'
          height='40px'
          width='100%'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttonBorder='none'
        />
      </div>
    </div>
  );
}

export default RequestSignin;
