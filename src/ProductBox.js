import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';

function ProductBox({
  name,
  cost,
  src,
  id,
  inCart,
  inFavorites,
  addToCart,
  addToFavorites,
  removeFromFavorites,
}) {
  return (
    <div
      style={{
        width: '220px',
        height: '200px',
        display: 'inline-block',
        margin: '20px',
        position: 'relative',
        fontSize: '13px',
      }}
    >
      <p style={{ textAlign: 'center' }}>{name}</p>

      <AddToFavoritesIcon
        top='143px'
        left='85px'
        inFavorites={inFavorites}
        id={id}
        clickHandler={inFavorites ? removeFromFavorites : addToFavorites}
      />
      <ProductImage src={src} />
      <span
        style={{
          position: 'absolute',
          top: '38px',
          left: '86px',
          fontSize: '1.2em',
        }}
      >
        {cost}
      </span>
      <SizeOption top='78px' />

      <CustomButton
        width='70px'
        height='20px'
        text='add'
        top='140px'
        left='103px'
        clickHandler={addToCart}
        inCart={inCart}
        id={id}
      />
    </div>
  );
}

export default ProductBox;
