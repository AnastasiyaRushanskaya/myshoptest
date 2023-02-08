import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';

function FavoritesProductBox({
  name,
  cost,
  src,
  id,
  inCart,
  inFavorites,
  addToCart,
  removeFromFavorites,
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
        clickHandler={removeFromFavorites}
        inFavorites={inFavorites}
        id={id}
      />
      <ProductImage src={src} />
      <span
        style={{
          position: 'absolute',
          top: '0px',
          left: '86px',
          fontSize: '0.9em',
        }}
      >
        {name}
      </span>
      <span
        style={{
          position: 'absolute',
          top: '25px',
          left: '86px',
          fontSize: '1.1em',
        }}
      >
        {cost}
      </span>
      <SizeOption top='58px' border='none' />
      <CustomButton
        width='70px'
        height='20px'
        text='add'
        top='99px'
        left='110px'
        clickHandler={addToCart}
        inCart={inCart}
        id={id}
      />
    </div>
  );
}

export default FavoritesProductBox;
