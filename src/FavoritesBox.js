import React from 'react';
import CustomButton from './CustomButton';
import FavoritesList from './FavoritesList';

function FavoritesBox({
  products,
  toggleInFavorites,
  addToCart,
  checkIsInFavorites,
  clearFavoritesBox,
  width,
}) {
  return (
    <div
      style={{
        width: width,
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
      <br />
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
