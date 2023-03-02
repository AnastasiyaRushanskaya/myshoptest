import React from 'react';
import ShoppingBagProductBox from './ShoppingBagProductBox';

function ShoppingBagList({
  products,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
  changeQuantityValue,
  itemBoxWidth,
}) {
  const items = products.map((item, index) => {
    const inFavorites = checkIsInFavorites(item.id);
    return (
      <ShoppingBagProductBox
        product={item}
        key={index}
        inFavorites={inFavorites}
        removeFromCart={() => removeFromCart(index)}
        toggleInFavorites={toggleInFavorites}
        changeQuantityValue={changeQuantityValue}
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
      {' '}
      {items}
    </div>
  );
}

export default ShoppingBagList;
