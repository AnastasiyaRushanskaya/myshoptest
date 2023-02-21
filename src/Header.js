import React from 'react';
import { Link } from 'react-router-dom';
import shopLogo from './images/shop_logo.png';

function Header({ text, shoppingBagItemsNumber, favorites, isLogin }) {
  return (
    <header style={{ marginTop: '15px', marginBottom: '15px' }}>
      <div style={{ display: 'inline-block', width: '17%' }}>
        <Link to='/'>
          <img
            src={shopLogo}
            style={{ width: 'auto', height: '40px', marginLeft: '30px' }}
          ></img>
        </Link>
      </div>
      <h1
        style={{
          display: 'inline-block',
          width: '58%',
          margin: '0px',
          textAlign: 'center',
        }}
      >
        {text}
      </h1>
      <div style={{ display: 'inline-block', width: '25%', fontSize: '0.8em' }}>
        <Link to={isLogin ? '/yourprofile' : '/login'} className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-person'></i>{' '}
            {isLogin ? 'Your profile' : 'Sign in'}
          </span>
        </Link>
        <Link to='/favorites' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-heart'></i> Favorites ({favorites.length})
          </span>
        </Link>
        <Link to='/shoppingBag' className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-bag'></i> Shopping bag ({shoppingBagItemsNumber}
            )
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
