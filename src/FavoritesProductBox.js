import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import { useState } from 'react';

function FavoritesProductBox({
  product,
  inFavorites,
  addToCart,
  toggleInFavorites,
  changeSizeHandler,
  itemBoxWidth,
}) {
  const { name, cost, src, id } = product;
  const [size, setSize] = useState('');

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }
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
      <p style={{ textAlign: 'center' }}>{name}</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '56%', height: '100%' }}>
          <ProductImage src={src} />
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            height: 'auto',
            flexWrap: 'wrap',
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
          <SizeOption selectSize={changeSizeHandler} size={size} />
          <div
            style={{ display: 'inline', width: '100%', alignSelf: 'flex-end' }}
          >
            <AddToFavoritesIcon
              inFavorites={inFavorites}
              clickHandler={() => toggleInFavorites(id)}
            />{' '}
            <CustomButton
              text='add'
              clickHandler={() => addToCart(id, size)}
              iconName='bi bi-bag'
              width='70px'
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

export default FavoritesProductBox;
