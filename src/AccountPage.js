import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

function AccountPage({ setIsLogin }) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const navigate = useNavigate();

  function signOut() {
    navigate('/login');
    setIsLogin(false);
  }

  function clearLocalStorage() {
    localStorage.clear();
  }
  const savedUser = JSON.parse(localStorage.getItem('user'));
  console.log(savedUser);

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        Hello, {savedUser.firstname ? savedUser.firstname : 'member'}!
      </h4>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <div style={{ fontSize: '0.8em' }}>
          <div
            onClick={() => setIsDetailsVisible(!isDetailsVisible)}
            style={{
              display: 'flex',
              height: '40px',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
          >
            <p className='linkStyles'>My details</p>

            <i
              className={
                isDetailsVisible ? 'bi bi-arrow-up' : 'bi bi-arrow-down'
              }
            ></i>
          </div>

          {isDetailsVisible && (
            <div>
              <p>Email: {savedUser.email}</p>
              <p>
                Date of Birth:{' '}
                {savedUser.dayOfBirth +
                  ' ' +
                  savedUser.monthOfBirth +
                  ' ' +
                  savedUser.yearOfBirth}
              </p>
              <p>
                First name: {savedUser.firstname ? savedUser.firstname : ''}
              </p>
              <p>Last name: {savedUser.lastname ? savedUser.lastname : ''}</p>
              <p>
                Gender:{' '}
                {savedUser.gender === 'Select a gender' ? '' : savedUser.gender}
              </p>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomButton
            text='My shopping bag'
            clickHandler={() => navigate('/shoppingbag')}
            iconName='bi bi-bag-check'
            width='30%'
            height='40px'
            buttonBorder='1px solid grey'
            buttonColor='#faf9f8'
            buttonTextColor='black'
          />
          <CustomButton
            text='Favorites
            '
            clickHandler={() => navigate('/favorites')}
            iconName='bi bi-bag-heart'
            width='30%'
            height='40px'
            buttonBorder='1px solid grey'
            buttonColor='#faf9f8'
            buttonTextColor='black'
          />
          <CustomButton
            text='Sign out'
            clickHandler={signOut}
            iconName='bi bi-box-arrow-right'
            width='30%'
            height='40px'
            buttonBorder='none'
            buttonColor='black'
            buttonTextColor='#faf9f8'
          />
        </div>

        <div style={{ width: '100%', margin: '0 auto' }}>
          <CustomButton
            text='Clear local storage'
            clickHandler={clearLocalStorage}
            iconName='bi bi-box-arrow-right'
            width='30%'
            height='40px'
            buttonBorder='none'
            buttonColor='black'
            buttonTextColor='#faf9f8'
          />
        </div>
      </div>
    </>
  );
}

export default AccountPage;
