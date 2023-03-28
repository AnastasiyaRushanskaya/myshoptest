import React, { useContext } from 'react';
import Context from './Context';
import { Col, Row, Image, Nav } from 'react-bootstrap';
import shopLogo from './images/shop_logo.png';

function Header({ shoppingBagItemsNumber, favorites }) {
  const value = useContext(Context);
  return (
    <Row as='header' className='my-3'>
      <Col xs={1} md={2}>
        <Nav.Link href='/' className='linkstyles'>
          <Image
            src={shopLogo}
            style={{ width: 'auto', height: '40px' }}
          ></Image>
        </Nav.Link>
      </Col>
      <Col as='h1' xs={11} md={7} className='text-center my-0'>
        <Nav.Link href='/' className='linkstyles'>
          My Shop
        </Nav.Link>
      </Col>
      <Col
        xs={12}
        md={3}
        className='d-flex align-items-center text-center py-3'
      >
        <Col xs={3} className='fs-sm'>
          <Nav.Link
            href={value.isLogin ? '/account' : '/login'}
            className='linkStyles'
          >
            <i className='bi bi-person px-1'></i>
            {value.isLogin ? 'My account' : 'Sign in'}
          </Nav.Link>
        </Col>

        <Col xs={4} className='fs-sm'>
          <Nav.Link href='/favorites' className='linkStyles'>
            <i className='bi bi-heart px-1'></i>Favorites ({favorites.length})
          </Nav.Link>
        </Col>

        <Col xs={5} className='fs-sm'>
          <Nav.Link href='/shoppingBag' className='linkStyles'>
            <i className='bi bi-bag px-1'></i>Shopping bag (
            {shoppingBagItemsNumber})
          </Nav.Link>
        </Col>
      </Col>
    </Row>
  );
}

export default Header;
