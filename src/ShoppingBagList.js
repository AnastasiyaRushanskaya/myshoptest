import React from 'react';
import ShoppingBagProductBox from './ShoppingBagProductBox';

function ShoppingBagList({
  products,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
}) {
  const items = products.map((item, index) => {
    const inFavorites = checkIsInFavorites(item.id);
    return (
      <ShoppingBagProductBox
        key={index}
        id={item.id}
        name={item.name}
        size={item.size}
        cost={item.cost}
        src={item.src}
        inFavorites={inFavorites}
        removeFromCart={() => removeFromCart(index)}
        products={products}
        toggleInFavorites={toggleInFavorites}
      />
    );
  });
  return items;
}

export default ShoppingBagList;
