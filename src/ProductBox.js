import React, { useState } from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';

function ProductBox({
  name,
  cost,
  src,
  id,
  inFavorites,
  addToCart,
  toggleInFavorites,
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
      <p style={{ textAlign: 'center', marginTop: '5px' }}>{name}</p>

      <ProductImage src={src} />
      <div
        style={{
          width: 'auto',
          marginLeft: '5px',
          display: 'inline-block',
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
          width='80px'
          height='20px'
          text='add'
          clickHandler={() => addToCart(id, size)}
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

export default ProductBox;
