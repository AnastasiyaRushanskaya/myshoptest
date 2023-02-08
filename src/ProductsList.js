import React from 'react';
import ProductBox from './ProductBox';

function ProductList({
  products,
  addToCart,
  addToFavorites,
  removeFromFavorites,
}) {
  const items = products.map((item) => {
    return (
      <ProductBox
        key={item.id}
        id={item.id}
        name={item.name}
        cost={item.cost}
        src={item.src}
        inCart={item.inCart}
        inFavorites={item.inFavorites}
        addToCart={addToCart}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    );
  });
  return items;
}

export default ProductList;
