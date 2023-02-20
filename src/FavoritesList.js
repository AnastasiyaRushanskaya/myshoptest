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
        toggleInFavorites={toggleInFavorites}
        addToCart={addToCart}
        products={products}
        itemBoxWidth={itemBoxWidth}
      />
    );
  });
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: 'auto',
      }}
    >
      {items}
    </div>
  );
}

export default FavoritesList;
