import React from 'react';
import CustomButton from './CustomButton';
import ShoppingBagList from './ShoppingBagList';

function ShoppingBag({
  products,
  removeFromCart,
  removeFromFavorites,
  addToFavorites,
}) {
  return (
    <div
      style={{
        minWidth: '350px',
        height: 'auto',
        position: 'absolute',
        right: '50px',
        top: '70px',
        margin: '20px',
      }}
    >
      <h4 style={{ marginTop: '0px', textAlign: 'center' }}>
        <i className='bi bi-bag-check'></i> Shopping bag ({products.length})
      </h4>
      <ShoppingBagList
        products={products}
        removeFromCart={removeFromCart}
        removeFromFavorites={removeFromFavorites}
        addToFavorites={addToFavorites}
      />
      {products.length !== 0 && (
        <CustomButton
          width='190px'
          height='30px'
          text='continue to checkout'
          bottom='-40px'
          left='80px'
        />
      )}
    </div>
  );
}

export default ShoppingBag;
