import React from 'react';
import { Row } from 'react-bootstrap';
import ShoppingBagProductBox from './ShoppingBagProductBox';

function ShoppingBagList({
  products,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
  changeQuantityValue,
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
      />
    );
  });
  return <Row xs={1}>{items}</Row>;
}

export default ShoppingBagList;
