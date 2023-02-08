import React from 'react';
import ShoppingBagProductBox from './ShoppingBagProductBox';

function ShoppingBagList({
  products,
  removeFromCart,
  removeFromFavorites,
  addToFavorites,
}) {
  const items = products.map((item) => {
    return (
      <ShoppingBagProductBox
        key={item.id}
        id={item.id}
        name={item.name}
        cost={item.cost}
        src={item.src}
        inCart={item.inCart}
        inFavorites={item.inFavorites}
        removeFromCart={removeFromCart}
        removeFromFavorites={removeFromFavorites}
        addToFavorites={addToFavorites}
        products={products}
      />
    );
  });
  return items;
}

export default ShoppingBagList;
