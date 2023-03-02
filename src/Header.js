import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from './Context';
import shopLogo from './images/shop_logo.png';

function Header({ text, shoppingBagItemsNumber, favorites }) {
  const value = useContext(Context);
  return (
    <header style={{ marginTop: '15px', marginBottom: '15px' }}>
      <div className='d-inline-block' style={{ width: '17%' }}>
        <Link to='/'>
          <img
            src={shopLogo}
            style={{ width: 'auto', height: '40px', marginLeft: '30px' }}
          ></img>
        </Link>
      </div>
      <h1
        className='d-inline-block text-align-center no-margin'
        style={{
          width: '58%',
        }}
      >
        {text}
      </h1>
      <div
        className='d-inline-block'
        style={{ width: '25%', fontSize: '0.7em' }}
      >
        <Link to={value.isLogin ? '/account' : '/login'} className='linkStyles'>
          <span style={{ padding: '7px' }}>
            <i className='bi bi-person'></i>{' '}
            {value.isLogin ? 'My account' : 'Sign in'}
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
