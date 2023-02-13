import React from 'react';

function AddToFavoritesIcon({ top, left, clickHandler, inFavorites }) {
  return (
    <i
      onClick={clickHandler}
      className={inFavorites ? 'bi bi-heart-fill' : 'bi bi-heart'}
      style={{
        cursor: 'pointer',
        color: inFavorites ? 'red' : 'black',
      }}
    ></i>
  );
}

export default AddToFavoritesIcon;
