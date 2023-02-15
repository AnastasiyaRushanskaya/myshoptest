import React from 'react';
import { Link } from 'react-router-dom';
import shopLogo from './images/shop_logo.png';

function Header({ text, products }) {
  return (
    <header style={{ marginTop: '15px', marginBottom: '15px' }}>
      <div style={{ width: '17%', display: 'inline-block' }}>
        <Link to='/'>
          <img
            src={shopLogo}
            style={{ height: '40px', width: 'auto', marginLeft: '30px' }}
          ></img>
        </Link>
      </div>
      <h1
        style={{
          textAlign: 'center',
          display: 'inline-block',
          width: '58%',
          margin: '0px',
        }}
      >
        {text}
      </h1>
      <div style={{ width: '25%', display: 'inline-block', fontSize: '0.8em' }}>
        <Link to='/login' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-person'></i> Sign in
          </span>
        </Link>
        <Link to='/favorites' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-heart'></i> Favorites
          </span>
        </Link>
        <Link to='/shoppingBag' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-bag'></i> Shopping bag ({products.length})
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
