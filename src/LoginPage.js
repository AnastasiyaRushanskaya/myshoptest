import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from './CustomButton';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import LoginAndRegisterCheckbox from './LoginAndRegisterCheckbox';
import LoginAndRegisterInputBoxName from './LoginAndRegisterInputBoxName';

function LoginPage() {
  const navigate = useNavigate();
  const [isLoginPasswordHidden, setIsLoginPasswordHidden] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onSubmit',
  });
  const inputStyle = {
    width: '100%',
    height: '40px',
    boxSizing: 'border-box',
    border: '0.3px solid grey',
  };

  function togglePasswordVisibility() {
    setIsLoginPasswordHidden(!isLoginPasswordHidden);
  }
  function onSubmit(data) {
    console.log(data);
  }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginAndRegisterInputBoxName name='Email' color='red' />
          <input
            name='email'
            placeholder='example@gmail.com'
            {...register('email', {
              required: { value: true, message: 'This field is required' },
            })}
            style={{ ...inputStyle, borderColor: errors.email && 'red' }}
          />
          <div style={{ height: '15px' }}>
            {errors.email && (
              <p className={'errorMessage'}>{errors.email.message}</p>
            )}
          </div>
          <LoginAndRegisterInputBoxName name='Password' color='red' />

          <input
            name='password'
            type={isLoginPasswordHidden ? 'password' : 'text'}
            placeholder='password'
            {...register('password', {
              required: true,
            })}
            style={{ ...inputStyle, borderColor: errors.password && 'red' }}
          />

          <span
            style={{
              float: 'right',
              marginRight: '10px',
              marginTop: '-32px',
              position: 'relative',
              zIndex: '2',
              cursor: 'pointer',
            }}
            onClick={togglePasswordVisibility}
          >
            <i
              className={isLoginPasswordHidden ? 'bi bi-eye' : 'bi bi-eye-fill'}
            ></i>
          </span>
          {errors.password && (
            <div style={{ height: '15px' }}>
              <p className={'errorMessage'}>This field is required</p>
            </div>
          )}
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
        </form>

        <CustomButton
          text='Become a member'
          clickHandler={() => navigate('/register')}
          width='100%'
          height='40px'
          buttonBorder='1px solid black'
          buttonColor='#faf9f8'
          buttonTextColor='black'
        />
      </div>
    </div>
  );
}

export default LoginPage;
