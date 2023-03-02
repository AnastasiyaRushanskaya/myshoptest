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
  itemBoxWidth,
}) {
  const { name, cost, src, id, size, quantity } = product;
  return (
    <div
      style={{
        width: itemBoxWidth,
        height: '100%',
        margin: '15px',
        paddingLeft: '20px',
        fontSize: '0.8em',
      }}
    >
      <p className='text-align-center'>{name}</p>
      <div className='d-flex'>
        <div style={{ width: '56%', height: '100%' }}>
          <ProductImage src={src} />
        </div>
        <div
          className='d-flex flex-wrap-w'
          style={{
            width: '50%',
            height: 'auto',
            paddingLeft: '20px',
            paddingBottom: '6px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '100%',
              fontSize: '1.2em',
            }}
          >
            {cost}
          </span>
          <div>Size: {size}</div>
          <QuantityOption
            quantity={quantity}
            changeQuantityValue={(event) =>
              changeQuantityValue(id, size, event.target.value)
            }
            border='none'
          />

          <div
            style={{ display: 'inline', width: '100%', alignSelf: 'flex-end' }}
          >
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
      </div>
    </div>
  );
}

export default ShoppingBagProductBox;
