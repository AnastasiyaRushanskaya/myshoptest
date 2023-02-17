import React from 'react';
import FavoritesProductBox from './FavoritesProductBox';

function FavoritesList({
  products,
  addToCart,
  checkIsInFavorites,
  toggleInFavorites,
}) {
  const items = products.map((item) => {
    const inFavorites = checkIsInFavorites(item.id);
    return (
      <FavoritesProductBox
        product={item}
        key={item.id}
        inFavorites={inFavorites}
        toggleInFavorites={toggleInFavorites}
        addToCart={addToCart}
        products={products}
      />
    );
  });
  return items;
}

export default FavoritesList;
