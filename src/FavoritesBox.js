import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import CustomButton from './CustomButton';
import FavoritesList from './FavoritesList';

function FavoritesBox({
  products,
  inFavoritesPage,
  toggleInFavorites,
  addToCart,
  checkIsInFavorites,
  clearFavoritesBox,
  width,
  buttonWidth,
  itemBoxWidth,
}) {
  return (
    <div
      style={{
        width: width,
        height: 'auto',
      }}
    >
      <h4 style={{ margin: '0px', textAlign: 'center' }}>
        <Link to='/favorites' className='linkStyles'>
          <i className='bi bi-bag-heart'></i> Your Favorites ({products.length})
        </Link>
      </h4>
      {inFavoritesPage && isEmpty(products) && (
        <p style={{ textAlign: 'center' }}>Your shopping bag is empty.</p>
      )}
      <FavoritesList
        products={products}
        addToCart={addToCart}
        checkIsInFavorites={checkIsInFavorites}
        toggleInFavorites={toggleInFavorites}
        itemBoxWidth={itemBoxWidth}
      />

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
