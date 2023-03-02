import React from 'react';
import FavoritesProductBox from './FavoritesProductBox';

function FavoritesList({
  products,
  addToCart,
  checkIsInFavorites,
  toggleInFavorites,
  itemBoxWidth,
}) {
  const items = products.map((item) => {
    const inFavorites = checkIsInFavorites(item.id);
    return (
      <FavoritesProductBox
        product={item}
        key={item.id}
        inFavorites={inFavorites}
        addToCart={addToCart}
        toggleInFavorites={toggleInFavorites}
        itemBoxWidth={itemBoxWidth}
      />
    );
  });
  return (
    <div
      className='d-flex flex-wrap-w'
      style={{
        height: 'auto',
      }}
    >
      {items}
    </div>
  );
}

export default FavoritesList;
