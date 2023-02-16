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
  // checked,
}) {
  const [size, setSize] = useState('');

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '220px',
        height: '200px',
        margin: '20px',
        fontSize: '13px',
      }}
    >
      <p style={{ textAlign: 'center', marginTop: '5px' }}>{name}</p>

      <ProductImage src={src} />
      <div
        style={{
          display: 'inline-block',
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
          width='80px'
          height='20px'
          iconName='bi bi-bag'
          buttonColor='black'
          buttonTextColor='#faf9f8'
          buttonBorder='none'
        />
      </div>
    </div>
  );
}

export default ProductBox;
