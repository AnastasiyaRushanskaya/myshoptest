import React from 'react';
import CustomButton from './CustomButton';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import QuantityOption from './QuantityOption';

function ShoppingBagProductBox({
  product,
  removeFromCart,
  inFavorites,
  toggleInFavorites,
  changeQuantityValue,
}) {
  const { name, cost, src, id, size, quantity } = product;
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        width: '220px',
        height: '200px',
        margin: '20px',
        fontSize: '13px',
      }}
    >
      <p style={{ textAlign: 'center' }}>{name}</p>

      <ProductImage src={src} />

      <div
        style={{ display: 'inline-block', width: 'auto', marginLeft: '5px' }}
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
        <QuantityOption
          quantity={quantity}
          changeQuantityValue={(event) =>
            changeQuantityValue(id, size, event.target.value)
          }
          border='none'
        />
        <br />
        <AddToFavoritesIcon
          inFavorites={inFavorites}
          clickHandler={() => toggleInFavorites(id)}
        />{' '}
        <CustomButton
          text='remove'
          clickHandler={removeFromCart}
          iconName='bi bi-bag'
          width='fit-content'
          height='20px'
          buttonBorder='none'
          buttonColor='black'
          buttonTextColor='#faf9f8'
        />
      </div>
    </div>
  );
}

export default ShoppingBagProductBox;
