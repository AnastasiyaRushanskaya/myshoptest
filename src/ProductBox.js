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
}) {
  const [size, setSize] = useState('');

  // const small = '29.55%';
  // const big = '46.2%';

  function changeSizeHandler(event) {
    setSize(event.target.value);
  }

  return (
    <div
      className={twoItemsInLine ? 'big' : 'small'}
      style={{
        // width: { small },
        // width: '29.55%',
        height: 'auto',
        margin: '15px',
        fontSize: '0.8em',
      }}
    >
      <p style={{ textAlign: 'center' }}>{name}</p>
      <div style={{ display: 'flex' }}>
        <ProductImage src={src} />
        <div
          style={{
            display: 'flex',
            width: '50%',
            height: 'auto',
            flexWrap: 'wrap',
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

// return (
//   <div
//     style={{
//       width: '29.55%',
//       // width: '46.2%',
//       height: 'auto',
//       margin: '15px',
//       fontSize: '0.8em',

//     }}
//   >
//     <p style={{ textAlign: 'center', marginTop: '5px' }}>{name}</p>

//     <ProductImage src={src} />
//     <div
//       style={{
//         display: 'flex',
//         width: '50%',
//         height: '100%',
//         flexWrap: 'wrap',
//         // marginLeft: '5px',
//         alignItems: 'flex-end',
//       }}
//     >
//       <span
//         style={{
//           display: 'block',
//           fontSize: '1.2em',
//         }}
//       >
//         {cost}
//       </span>
//       <SizeOption selectSize={changeSizeHandler} size={size} />
//       {/* <br /> */}
//       <AddToFavoritesIcon
//         inFavorites={inFavorites}
//         clickHandler={() => toggleInFavorites(id)}
//       />{' '}
//       <CustomButton
//         text='add'
//         clickHandler={() => addToCart(id, size)}
//         iconName='bi bi-bag'
//         width='80px'
//         height='20px'
//         buttonBorder='none'
//         buttonColor='black'
//         buttonTextColor='#faf9f8'
//       />
//     </div>
//   </div>
// );
