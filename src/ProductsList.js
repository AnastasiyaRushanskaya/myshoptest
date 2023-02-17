import React from 'react';
import ProductBox from './ProductBox';

function ProductList({
  products,
  addToCart,
  toggleInFavorites,
  checkIsInFavorites,
  checked,
}) {
  const items = products.map((item) => {
    const inFavorites = checkIsInFavorites(item.id);
    return (
      <ProductBox
        key={item.id}
        id={item.id}
        name={item.name}
        cost={item.cost}
        src={item.src}
        inFavorites={inFavorites}
        addToCart={addToCart}
        toggleInFavorites={toggleInFavorites}
        // checked={checked}
      />
    );
  });
  return items;
}

export default ProductList;
