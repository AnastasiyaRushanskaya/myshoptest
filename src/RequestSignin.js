import React from 'react';
import EmailAndPasswordInputBox from './LoginAndRegisterInputBox';
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
          width='100%'
          height='40px'
          buttonBorder='none'
          buttonColor='black'
          buttonTextColor='#faf9f8'
        />
      </div>
    </div>
  );
}

export default RequestSignin;
