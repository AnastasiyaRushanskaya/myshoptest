import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import QuantityOption from './QuantityOption';

function ShoppingBagProductBox({
  name,
  cost,
  src,
  id,
  inCart,
  removeFromCart,
  inFavorites,
  removeFromFavorites,
  addToFavorites,
}) {
  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        display: 'block',
        margin: '10px',
        position: 'relative',
        fontSize: '13px',
      }}
    >
      <AddToFavoritesIcon
        top='102px'
        left='86px'
        inFavorites={inFavorites}
        id={id}
        clickHandler={inFavorites ? removeFromFavorites : addToFavorites}
      />
      <ProductImage src={src} />
      <span
        style={{
          position: 'absolute',
          top: '-2px',
          left: '86px',
          fontSize: '0.9em',
        }}
      >
        {name}
      </span>
      <span
        style={{
          position: 'absolute',
          top: '22px',
          left: '86px',
          fontSize: '1.1em',
        }}
      >
        {cost}
      </span>
      <SizeOption top='46px' border='none' />
      <QuantityOption top='72px' border='none' />
      <CustomButton
        width='fit-content'
        height='20px'
        text='remove'
        top='99px'
        left='110px'
        clickHandler={removeFromCart}
        inCart={inCart}
        id={id}
      />
    </div>
  );
}

export default ShoppingBagProductBox;
