import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import ShoppingBagList from './ShoppingBagList';

function ShoppingBag({
  products,
  removeFromCart,
  checkIsInFavorites,
  toggleInFavorites,
  width,
  buttonWidth,
}) {
  return (
    <div
      style={{
        width: width,
        marginBottom: '20px',
        minHeight: '250px',
      }}
    >
      <h4 style={{ margin: '0px', textAlign: 'center' }}>
        <i className='bi bi-bag-check'></i> Shopping bag ({products.length})
      </h4>
      <ShoppingBagList
        products={products}
        removeFromCart={removeFromCart}
        toggleInFavorites={toggleInFavorites}
        checkIsInFavorites={checkIsInFavorites}
      />{' '}
      <br />
      {products.length !== 0 && (
        <Link to='/shoppingBag'>
          <CustomButton
            width={buttonWidth}
            marginLeft='20px'
            height='30px'
            text='continue to checkout'
            buttonColor='#faf9f8'
            buttonTextColor='black'
            buttornBorder='1px solid black'
          />
        </Link>
      )}
    </div>
  );
}

export default ShoppingBag;
