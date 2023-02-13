import React from 'react';
import { Link } from 'react-router-dom';
import shopLogo from './images/shop_logo.png';

function Header({ text, products }) {
  return (
    <header style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div style={{ width: '15%', display: 'inline-block' }}>
        <Link to='/'>
          <img
            src={shopLogo}
            style={{ height: '40px', width: 'auto', paddingLeft: '30px' }}
          ></img>
        </Link>
      </div>
      <h1
        style={{
          textAlign: 'center',
          display: 'inline-block',
          width: '60%',
          margin: '0px',
        }}
      >
        {text}
      </h1>
      <div style={{ width: '25%', display: 'inline-block', fontSize: '0.8em' }}>
        <Link to='/' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-person'></i> Sign in
          </span>
        </Link>
        <Link to='/' className='linkStyles'>
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
