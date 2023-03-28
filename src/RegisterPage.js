import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from './CustomButton';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import LoginAndRegisterInputBoxName from './LoginAndRegisterInputBoxName';
import TermsAndConditionsBox from './TermsAndConditionsBox';
import { months } from './monthsArray';
import Context from './Context';

function getUsersData() {
  if (localStorage.getItem('usersData')) {
    return JSON.parse(localStorage.getItem('usersData'));
  } else {
    const users = {};
    return users;
  }
}

function saveUsersData(data) {
  const users = getUsersData();
  users[data.email] = data;
  const json = JSON.stringify(users);
  localStorage.setItem('usersData', json);
}

function RegisterPage() {
  const value = useContext(Context);
  const [isVisibleTermsAndConditionsBox, setIsVisibleTermsAndConditionsBox] =
    useState(false);
  const [isVisibleAddMoreInfoBox, setIsVisibleAddMoreInfoBox] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState('true');
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  const monthOptions = months.map((month, index) => {
    return <option key={index}>{month}</option>;
  });

  const genders = ['Select a gender', 'Male', 'Female', 'Prefer not to say'];

  const genderOptions = genders.map((gender, index) => {
    return <option key={index}>{gender}</option>;
  });

  const addMoreInfoPColor = isVisibleAddMoreInfoBox ? 'red' : 'black';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });

  function showAddInfoBox() {
    setIsVisibleAddMoreInfoBox(!isVisibleAddMoreInfoBox);
  }

  let termsAndConditionsBox;
  if (isVisibleTermsAndConditionsBox) {
    termsAndConditionsBox = <TermsAndConditionsBox />;
  }
  const inputStyle = {
    width: '100%',
    height: '40px',
    boxSizing: 'border-box',
    border: '0.3px solid grey',
  };

  function onSubmit(data) {
    saveUsersData(data);
    value.setIsLogin(true);
    navigate('/account');
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <LoginAndRegisterInputBoxName name='Email' color='red' />
        <input
          name='email'
          placeholder='example@gmail.com'
          {...register('email', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value: /.+@.+\..+/i,
              message: 'Please enter a valid email',
            },
          })}
          style={{ ...inputStyle, borderColor: errors.email && 'red' }}
        />
        <div style={{ height: '15px' }}>
          {errors.email && (
            <p className={'errorMessage red'}>{errors.email.message}</p>
          )}
        </div>
        <LoginAndRegisterInputBoxName name='Create password' color='red' />
        <input
          name='password'
          type={isPasswordHidden ? 'password' : 'text'}
          placeholder='password'
          {...register('password', {
            required: { value: true, message: 'This field is required' },
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password should be not more than 20 symbols',
            },
            validate: {
              numbers: (v) =>
                v.match(/[0-9]/) ? true : 'Use at least 1 number',
              lowercaseletters: (v) =>
                v.match(/[a-z]/) ? true : 'Use at least 1 lowecase letter',
              uppercaseletters: (v) =>
                v.match(/[A-Z]/) ? true : 'Use at least 1 uppercase letter',
            },
          })}
          style={{ ...inputStyle, borderColor: errors.password && 'red' }}
        />

        <span
          className='c-pointer'
          style={{
            position: 'relative',
            float: 'right',
            marginRight: '10px',
            marginTop: '-32px',
            zIndex: '2',
          }}
          onClick={togglePasswordVisibility}
        >
          <i className={isPasswordHidden ? 'bi bi-eye' : 'bi bi-eye-fill'}></i>
        </span>
        <div style={{ height: '15px' }}>
          {!errors.password && (
            <p className='no-margin' style={{ fontSize: '0.6em' }}>
              It must be at least 6 characters long, including 1 uppercase, 1
              lowercase, 1 number
            </p>
          )}
          {errors.password && (
            <p className={'errorMessage red'}>{errors.password.message}</p>
          )}
        </div>

        <LoginAndRegisterInputBoxName name='Date of Birth' color='red' />
        <div className='d-flex flex-wrap-w justify-content-space-between'>
          <div style={{ width: '30%' }}>
            <input
              name='dayOfBirth'
              {...register('dayOfBirth', {
                min: 1,
                max: 31,
                pattern: /\d/,
              })}
              style={{
                ...inputStyle,
                borderColor: errors.dayOfBirth && 'red',
              }}
            />
          </div>
          <select
            name='monthOfBirth'
            {...register('monthOfBirth')}
            style={{
              width: '30%',
              height: '40px',
              boxSizing: 'border-box',
              border: '0.3px solid grey',
            }}
          >
            {monthOptions}
          </select>
          <div style={{ width: '30%' }}>
            <input
              name='yearOfBirth'
              {...register('yearOfBirth', {
                min: {
                  value: 1,
                  message: 'You have to enter a valid birthdate',
                },
                max: {
                  value: new Date(
                    +new Date() - 16 * 1000 * 60 * 60 * 24 * 365
                  ).getFullYear(),
                  message:
                    'You have to be at least 16 years old to become a member',
                },
                pattern: {
                  value: /\d/,
                  message:
                    'Please provide your date of birth for a better membership experience.',
                },
              })}
              style={{
                ...inputStyle,
                borderColor: errors.yearOfBirth && 'red',
              }}
            />
          </div>

          <div style={{ height: '15px', width: '100%' }}>
            {errors.yearOfBirth ? (
              <p className={'errorMessage red'}>{errors.yearOfBirth.message}</p>
            ) : errors.dayOfBirth ? (
              <p className={'errorMessage red'}>
                Please provide your date of birth for a better membership
                experience.
              </p>
            ) : (
              <p className='no-margin' style={{ fontSize: '0.6em' }}>
                H&M wants to give you a special treat on your birthday
              </p>
            )}
          </div>
        </div>
        <div
          className='c-pointer text-align-center'
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: 'white',
          }}
          onClick={showAddInfoBox}
        >
          <p style={{ paddingTop: '10px', color: addMoreInfoPColor }}>
            ADD MORE & GET MORE{' '}
            <i
              className={
                isVisibleAddMoreInfoBox ? 'bi bi-arrow-up' : 'bi bi-arrow-down'
              }
            ></i>
          </p>
        </div>
        {isVisibleAddMoreInfoBox && (
          <div
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: 'white',
              marginTop: '-28px',
            }}
          >
            <LoginAndRegisterHeader desctription='Did you know that if you add some more information below you will earn more points and get a more personalised experience? How great is that?' />
            <LoginAndRegisterInputBoxName name='First name' color='white' />
            <input
              name='firstname'
              {...register('firstname')}
              style={inputStyle}
            />
            <LoginAndRegisterInputBoxName name='Last name' color='white' />
            <input
              name='lastname'
              {...register('lastname')}
              style={inputStyle}
            />
            <LoginAndRegisterInputBoxName name='Gender' color='white' />

            <select name='gender' style={inputStyle} {...register('gender')}>
              {genderOptions}
            </select>
            <LoginAndRegisterInputBoxName name='Postcode' color='white' />
            <input
              name='postcode'
              {...register('postcode')}
              style={inputStyle}
            />
          </div>
        )}

        <div
          style={{
            marginTop: '15px',
            textAlign: 'justify',
            fontSize: '0.8em',
          }}
        >
          <input
            type='checkbox'
            id='checkbox'
            name='checkbox'
            {...register('checkbox')}
            style={{ marginLeft: '0' }}
          />
          <label htmlFor='checkbox'>
            Yes, email me offers, style updates, and special invites to sales &
            events
          </label>
        </div>
        <p style={{ fontSize: '0.6em', textAlign: 'justify' }}>
          By clicking ‘Become a member’, I agree to the H&M Membership{' '}
          <a
            style={{ textDecoration: 'underline' }}
            className='linkStyles'
            onClick={() =>
              setIsVisibleTermsAndConditionsBox(!isVisibleTermsAndConditionsBox)
            }
          >
            {termsAndConditionsBox}
            Terms and conditions.
          </a>
        </p>

        <CustomButton text='Become a member' variant='dark' width='100%' />

        <Link to='/login' className='linkStyles'>
          <p
            className='text-align-center font-weight-bold'
            style={{
              fontSize: '0.7em',
              textDecoration: 'underline',
            }}
          >
            Back to Sign in
          </p>
        </Link>
      </div>
    </form>
  );
}

export default RegisterPage;
export { getUsersData };
