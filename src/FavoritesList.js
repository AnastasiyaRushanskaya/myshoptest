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
        key={item.id}
        id={item.id}
        name={item.name}
        cost={item.cost}
        src={item.src}
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
