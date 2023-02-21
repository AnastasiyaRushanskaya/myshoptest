import React from 'react';
import ProductBox from './ProductBox';
import ProductsListHeader from './ProductListHeader';

function ProductList({
  products,
  twoItemsInLine,
  threeItemsInLine,
  addToCart,
  toggleInFavorites,
  checkIsInFavorites,
  changeSizeToBig,
  changeSizeToSmall,
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
        src2={item.src2}
        inFavorites={inFavorites}
        addToCart={addToCart}
        toggleInFavorites={toggleInFavorites}
        twoItemsInLine={twoItemsInLine}
        threeItemsInLine={threeItemsInLine}
      />
    );
  });
  return (
    <>
      <ProductsListHeader
        products={products}
        twoItemsInLine={twoItemsInLine}
        threeItemsInLine={threeItemsInLine}
        changeSizeToBig={changeSizeToBig}
        changeSizeToSmall={changeSizeToSmall}
      />
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
    </>
  );
}

export default ProductList;
