import React from 'react';
import FavoritesProductBox from './FavoritesProductBox';

function FavoritesList({ products, removeFromFavorites, addToCart }) {
  const items = products.map((item) => {
    return (
      <FavoritesProductBox
        key={item.id}
        id={item.id}
        name={item.name}
        cost={item.cost}
        src={item.src}
        inCart={item.inCart}
        inFavorites={item.inFavorites}
        removeFromFavorites={removeFromFavorites}
        addToCart={addToCart}
        products={products}
      />
    );
  });
  return items;
}

export default FavoritesList;
