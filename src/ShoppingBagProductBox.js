import React from 'react';
import CustomButton from './CustomButton';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import QuantityOption from './QuantityOption';

function ShoppingBagProductBox({
  name,
  cost,
  src,
  id,
  removeFromCart,
  inFavorites,
  size,
  toggleInFavorites,
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

      <ProductImage src={src} />

      <div
        style={{
          width: 'auto',
          marginLeft: '5px',
          display: 'inline-block',
        }}
      >
        <div
          style={{
            fontSize: '1.2em',
          }}
        >
          {cost}
        </div>
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          Size: {size}
        </div>
        <QuantityOption top='72px' border='none' />
        <br />
        <AddToFavoritesIcon
          inFavorites={inFavorites}
          clickHandler={() => toggleInFavorites(id)}
        />{' '}
        <CustomButton
          width='fit-content'
          height='20px'
          text='remove'
          clickHandler={removeFromCart}
          id={id}
          iconName='bi bi-bag'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttornBorder='none'
        />
      </div>
    </div>
  );
}

export default ShoppingBagProductBox;
