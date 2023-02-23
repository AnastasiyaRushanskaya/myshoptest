import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

function AccountPage({ setIsLogin }) {
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
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div>
        <p>Email: {savedUser.email}</p>
      </div>
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
  );
}

export default AccountPage;
