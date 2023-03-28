import React from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import CustomButton from './CustomButton';

function SliderItemOne() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        className='d-flex flex-wrap-w align-items-center'
        style={{
          justifyContent: 'center',
          height: '300px',
          margin: '0 auto',
          boxSizing: 'border-box',
          backgroundColor: '#fcf2df',
        }}
      >
        <p
          className='text-align-center'
          style={{
            width: '100%',
            fontSize: '1.3em',
          }}
        >
          Discount for our members will end in
        </p>
        <Timer date={new Date('Fri, 31 Mar 2023 00:00:00')} />
        <p
          className='no-margin text-align-center font-weight-bold'
          style={{
            color: 'red',
            fontSize: '4em',
          }}
        >
          15%
        </p>
        <div
          className='text-align-center'
          style={{
            width: '100%',
            paddingBottom: '20px',
          }}
        >
          {' '}
          <CustomButton
            text='START SHOPPING'
            clickHandler={() => navigate('/')}
            width='30%'
            height='40px'
            buttonBorder='1px solid red'
            buttonColor='#fcf2df'
            buttonTextColor='red'
          />
        </div>
      </div>
      <p className='text-align-center font-weight-bold'>
        Here’s 15% off your next purchase till 3rd of March
      </p>
    </div>
  );
}

export default SliderItemOne;
