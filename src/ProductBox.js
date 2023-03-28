import React, { useState } from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import { Row, Col } from 'react-bootstrap';

function ProductBox({
  name,
  cost,
  src,
  id,
  inFavorites,
  addToCart,
  toggleInFavorites,
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
    <Col className='py-3'>
      <Row>
        <Row xs={12} as='p' className='justify-content-center fs-md'>
          {name}
        </Row>
        <Col xs={6} onMouseLeave={changeImage} onMouseEnter={changeImage}>
          <ProductImage src={src} src2={src2} imageChange={imageChange} />
        </Col>
        <Col
          xs={6}
          className='d-flex flex-column justify-content-between fs-md'
        >
          <Col xs={12}>{cost}</Col>
          <Col xs={12}>
            <SizeOption selectSize={changeSizeHandler} size={size} />
          </Col>
          <Col xs={12}>
            <AddToFavoritesIcon
              inFavorites={inFavorites}
              clickHandler={() => toggleInFavorites(id)}
            />
            {'  '}
            <CustomButton
              text='add'
              clickHandler={(event) => addToCart(event, id, size)}
              variant='dark'
              iconName='bi bi-bag'
              width='80px'
              height='20px'
              buttonBorder='none'
              buttonColor='black'
              buttonTextColor='#faf9f8'
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

// function ProductBox({
//   name,
//   cost,
//   src,
//   id,
//   inFavorites,
//   addToCart,
//   toggleInFavorites,
//   twoItemsInLine,
//   src2,
// }) {
//   const [size, setSize] = useState('');
//   const [imageChange, setImageChange] = useState(false);

//   function changeImage() {
//     setImageChange(!imageChange);
//   }

//   function changeSizeHandler(event) {
//     setSize(event.target.value);
//   }

//   return (
//     <div
//       className={twoItemsInLine ? 'big' : 'small'}
//       style={{
//         height: 'auto',
//         margin: '15px',
//         fontSize: '0.8em',
//         paddingLeft: '20px',
//       }}
//     >
//       <p className='text-align-center'>{name}</p>
//       <div className='d-flex'>
//         <div
//           onMouseEnter={changeImage}
//           onMouseLeave={changeImage}
//           style={{ width: '56%', height: '100%' }}
//         >
//           <ProductImage src={src} src2={src2} imageChange={imageChange} />
//         </div>

//         <div
//           className='d-flex flex-wrap-w'
//           style={{
//             width: '50%',
//             height: 'auto',
//             paddingLeft: '10px',
//             paddingBottom: '6px',
//           }}
//         >
//           <span
//             style={{
//               display: 'block',
//               width: '100%',
//               fontSize: '1.2em',
//             }}
//           >
//             {cost}
//           </span>
//           <SizeOption selectSize={changeSizeHandler} size={size} />
//           <div style={{ display: 'inline', alignSelf: 'flex-end' }}>
//             <AddToFavoritesIcon
//               inFavorites={inFavorites}
//               clickHandler={() => toggleInFavorites(id)}
//             />
//             <CustomButton
//               text='add'
//               clickHandler={(event) => addToCart(event, id, size)}
//               iconName='bi bi-bag'
//               width='80px'
//               height='20px'
//               buttonBorder='none'
//               buttonColor='black'
//               buttonTextColor='#faf9f8'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default ProductBox;
