import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import ShoppingBagList from './ShoppingBagList';
import { isEmpty } from 'lodash';
import { Row, Col } from 'react-bootstrap';

function ShoppingBag({
  products,
  shoppingBagItemsNumber,
  removeFromCart,
  checkIsInFavorites,
  toggleInFavorites,
  changeQuantityValue,
  width,
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: width,
        marginBottom: '20px',
        minHeight: '250px',
      }}
    >
      <h4 className='text-align-center no-margin'>
        <Link to='/shoppingBag' className='linkStyles'>
          <i className='bi bi-bag-check'></i> Shopping bag (
          {shoppingBagItemsNumber})
        </Link>
      </h4>
      {isEmpty(products) && (
        <p className='text-align-center my-3'>Your shopping bag is empty.</p>
      )}
      <ShoppingBagList
        products={products}
        removeFromCart={removeFromCart}
        toggleInFavorites={toggleInFavorites}
        checkIsInFavorites={checkIsInFavorites}
        changeQuantityValue={changeQuantityValue}
      />{' '}
      {products.length !== 0 && (
        <Row className='my-3 justify-content-center'>
          <Col xs={7}>
            <CustomButton
              text='continue to checkout'
              clickHandler={() => navigate('/shoppingBag')}
              variant='outline-dark'
              width='100%'
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ShoppingBag;
