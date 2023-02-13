import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import { useState } from 'react';

function FavoritesProductBox({
  name,
  cost,
  src,
  id,
  inFavorites,
  addToCart,
  toggleInFavorites,
  // size,
  changeSizeHandler,
}) {
  const [size, setSize] = useState('');

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }
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
          width='70px'
          text='add'
          clickHandler={() => addToCart(id, size)}
          //   id={id}
        />
      </div>
    </div>
  );
}

export default FavoritesProductBox;
