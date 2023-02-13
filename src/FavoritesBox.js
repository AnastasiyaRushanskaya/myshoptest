import React from 'react';
import CustomButton from './CustomButton';
import FavoritesList from './FavoritesList';

function FavoritesBox({
  products,
  toggleInFavorites,
  addToCart,
  checkIsInFavorites,
  clearFavoritesBox,
}) {
  return (
    <div
      style={{
        width: '350px',
        height: 'auto',
      }}
    >
      <h4 style={{ margin: '0px', textAlign: 'center' }}>
        <i className='bi bi-bag-heart'></i> Your Favorites ({products.length})
      </h4>
      <FavoritesList
        products={products}
        toggleInFavorites={toggleInFavorites}
        checkIsInFavorites={checkIsInFavorites}
        addToCart={addToCart}
      />
      {products.length !== 0 && (
        <CustomButton
          width='100%'
          height='30px'
          text='clear all'
          clickHandler={clearFavoritesBox}
        />
      )}
    </div>
  );
}

export default FavoritesBox;
