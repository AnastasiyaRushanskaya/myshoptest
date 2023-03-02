import React from 'react';

function SliderItem({ image, text }) {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '100% auto',
          margin: '0 auto',
          height: '300px',
        }}
      ></div>
      <p className='text-align-center font-weight-bold'>{text}</p>
    </div>
  );
}

export default SliderItem;
