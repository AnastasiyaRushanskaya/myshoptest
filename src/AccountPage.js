import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import Slider from './Slider';
import SliderItemOne from './SliderItemOne';
import SliderItem from './SliderItem';
import beautybar from './images/beautybar.jpeg';
import hogwarts from './images/hogwarts.jpeg';
import Context from './Context';
import AccountDetails from './AccountDetails';

function AccountPage() {
  const value = useContext(Context);
  const navigate = useNavigate();

  function signOut() {
    navigate('/login');
    value.setIsLogin(false);
  }

  function clearLocalStorage() {
    localStorage.clear();
  }
  const savedUser = JSON.parse(localStorage.getItem('usersData'));

  return (
    <>
      <h4 className='text-align-center' style={{ margin: '5px' }}>
        Hello, {savedUser.firstname ? savedUser.firstname : 'member'}!
      </h4>

      <Slider
        sliderItems={[
          <div>
            <SliderItemOne />
          </div>,
          <div>
            <SliderItem
              image={beautybar}
              text='Get 20% off at Beauty Bar by Dashl x My shop'
            />
          </div>,
          <div>
            <SliderItem
              image={hogwarts}
              text='Win a Hogwarts Legacy for PS5 (Deluxe Edition) and PlayStation 5
                      Console'
            />
          </div>,
        ]}
      />
      <AccountDetails />
      <section className='d-flex justify-content-space-between'>
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
          text='Favorites'
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
      </section>

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
    </>
  );
}

export default AccountPage;
