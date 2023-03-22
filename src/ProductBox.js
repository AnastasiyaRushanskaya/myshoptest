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
  twoItemsInLine,
  src2,
}) {
  const [size, setSize] = useState('');
  const [imageChange, setImageChange] = useState(false);

  function changeImage() {
    setImageChange(!imageChange);
  }

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }

  return (
    <div
      className={twoItemsInLine ? 'big' : 'small'}
      style={{
        height: 'auto',
        margin: '15px',
        fontSize: '0.8em',
        paddingLeft: '20px',
      }}
    >
      <p className='text-align-center'>{name}</p>
      <div className='d-flex'>
        <div
          onMouseEnter={changeImage}
          onMouseLeave={changeImage}
          style={{ width: '56%', height: '100%' }}
        >
          <ProductImage src={src} src2={src2} imageChange={imageChange} />
        </div>

        <div
          className='d-flex flex-wrap-w'
          style={{
            width: '50%',
            height: 'auto',
            paddingLeft: '10px',
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
          <div style={{ display: 'inline', alignSelf: 'flex-end' }}>
            <AddToFavoritesIcon
              inFavorites={inFavorites}
              clickHandler={() => toggleInFavorites(id)}
            />
            <CustomButton
              text='add'
              clickHandler={(event) => addToCart(event, id, size)}
              iconName='bi bi-bag'
              width='80px'
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

export default ProductBox;
