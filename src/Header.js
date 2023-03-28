import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from './Context';
import shopLogo from './images/shop_logo.png';
import { Col, Row } from 'react-bootstrap';

function Header({ text, shoppingBagItemsNumber, favorites }) {
  const value = useContext(Context);
  return (
    <Row as='header' className='my-3'>
      <Col xs={2}>
        <Link to='/'>
          <img src={shopLogo} style={{ width: 'auto', height: '40px' }}></img>
        </Link>
      </Col>
      <Col as='h1' xs={2} md={6} className='text-center'>
        {text}
      </Col>
      <Col xs={8} md={4}>
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
      </Col>
    </Row>
  );
}

export default Header;
