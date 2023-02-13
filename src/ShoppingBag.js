import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import ShoppingBagList from './ShoppingBagList';

function ShoppingBag({
  products,
  removeFromCart,
  checkIsInFavorites,
  toggleInFavorites,
}) {
  return (
    <div
      style={{
        width: '350px',
        minHeight: '350px',
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
      />
      {products.length !== 0 && (
        <Link to='/shoppingBag'>
          <CustomButton
            width='100%'
            height='30px'
            text='continue to checkout'
          />
        </Link>
      )}
    </div>
  );
}

export default ShoppingBag;
