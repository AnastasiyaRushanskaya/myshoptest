import React from 'react';

function AddToFavoritesIcon({ top, left, clickHandler, id, inFavorites }) {
  return (
    <i
      onClick={() => clickHandler(id)}
      className={inFavorites ? 'bi bi-heart-fill' : 'bi bi-heart'}
      style={{
        position: 'absolute',
        left: left,
        top: top,
        cursor: 'pointer',
        color: inFavorites ? 'red' : 'black',
      }}
    ></i>
  );
}

export default AddToFavoritesIcon;
