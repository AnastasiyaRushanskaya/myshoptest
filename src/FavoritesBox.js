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
  buttonWidth,
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
        addToCart={addToCart}
        checkIsInFavorites={checkIsInFavorites}
        toggleInFavorites={toggleInFavorites}
      />
      <br />
      {products.length !== 0 && (
        <CustomButton
          text='clear all'
          clickHandler={clearFavoritesBox}
          width={buttonWidth}
          height='30px'
          marginLeft='20px'
          buttonBorder='1px solid black'
          buttonColor='#faf9f8'
          buttonTextColor='black'
        />
      )}
    </div>
  );
}

export default FavoritesBox;
