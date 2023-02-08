import React from 'react';
import CustomButton from './CustomButton';
import FavoritesList from './FavoritesList';

function FavoritesBox({ products, removeFromFavorites, addToCart }) {
  return (
    <div
      style={{
        minWidth: '350px',
        height: 'auto',
        position: 'absolute',
        right: '50px',
        top: '470px',
        margin: '20px',
      }}
    >
      <h4 style={{ marginTop: '0px', textAlign: 'center' }}>
        <i className='bi bi-bag-heart'></i> Your Favorites ({products.length})
      </h4>
      <FavoritesList
        products={products}
        removeFromFavorites={removeFromFavorites}
        addToCart={addToCart}
      />
      {products.length !== 0 && (
        <CustomButton
          width='190px'
          height='30px'
          text='clear all'
          bottom='-40px'
          //   right='0px'
          left='80px'
        />
      )}
    </div>
  );
}

export default FavoritesBox;
