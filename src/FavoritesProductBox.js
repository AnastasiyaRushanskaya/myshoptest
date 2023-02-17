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
}) {
  const { name, cost, src, id } = product;
  const [size, setSize] = useState('');

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }
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
        style={{
          width: 'auto',
          marginLeft: '5px',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '1.2em',
          }}
        >
          {cost}
        </span>
        <SizeOption selectSize={changeSizeHandler} size={size} />
        <br />
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
  );
}

export default FavoritesProductBox;
