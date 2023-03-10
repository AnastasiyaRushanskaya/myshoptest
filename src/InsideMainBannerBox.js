import React from 'react';
import { Link } from 'react-router-dom';

function InsideMAinBannerBox({ text, address }) {
  return (
    <div
      style={{
        width: '25%',
        height: '50px',
        margin: '0 auto',
        marginBottom: '15px',
        border: '0.6px solid grey',
        textAlign: 'center',
      }}
    >
      <p
        className='no-margin'
        style={{
          color: 'black',
        }}
      >
        {text}
      </p>

      <Link to={address}>
        <i
          className='bi bi-arrow-right font-weight-bold'
          style={{ fontSize: '1.2em', color: 'black' }}
        ></i>
      </Link>
    </div>
  );
}

export default InsideMAinBannerBox;
