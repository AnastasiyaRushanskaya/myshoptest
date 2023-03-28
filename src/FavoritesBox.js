import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import CustomButton from './CustomButton';
import FavoritesList from './FavoritesList';
import { Col, Row } from 'react-bootstrap';

// function FavoritesBox({
//   products,
//   inFavoritesPage,
//   toggleInFavorites,
//   addToCart,
//   checkIsInFavorites,
//   clearFavoritesBox,
//   width,
//   itemBoxWidth,
// }) {
//   return (
//     <div
//       style={{
//         width: width,
//         height: 'auto',
//       }}
//     >
//       <h4 className='text-align-center no-margin'>
//         <Link to='/favorites' className='linkStyles'>
//           <i className='bi bi-bag-heart'></i> Your Favorites ({products.length})
//         </Link>
//       </h4>
//       {isEmpty(products) && (
//         <p className='text-align-center my-3'>No items added to favorites.</p>
//       )}
//       <FavoritesList
//         products={products}
//         addToCart={addToCart}
//         checkIsInFavorites={checkIsInFavorites}
//         toggleInFavorites={toggleInFavorites}
//         itemBoxWidth={itemBoxWidth}
//       />

//       {products.length !== 0 && (
//         <Row className='my-3 justify-content-center'>
//           <Col xs={7}>
//             <CustomButton
//               text='clear all'
//               width='100%'
//               clickHandler={clearFavoritesBox}
//               variant='outline-dark'
//             />
//           </Col>
//         </Row>
//       )}
//     </div>
//   );
// }

function FavoritesBox({
  products,
  inFavoritesPage,
  toggleInFavorites,
  addToCart,
  checkIsInFavorites,
  clearFavoritesBox,
  width,
  itemBoxWidth,
}) {
  return (
    <div
      style={{
        width: width,
        height: 'auto',
      }}
    >
      <h4 className='text-align-center no-margin'>
        <Link to='/favorites' className='linkStyles'>
          <i className='bi bi-bag-heart'></i> Your Favorites ({products.length})
        </Link>
      </h4>
      {isEmpty(products) && (
        <p className='text-align-center my-3'>No items added to favorites.</p>
      )}
      <FavoritesList
        products={products}
        addToCart={addToCart}
        checkIsInFavorites={checkIsInFavorites}
        toggleInFavorites={toggleInFavorites}
        itemBoxWidth={itemBoxWidth}
      />

      {products.length !== 0 && (
        <Row className='my-3 justify-content-center'>
          <Col xs={7}>
            <CustomButton
              text='clear all'
              width='100%'
              clickHandler={clearFavoritesBox}
              variant='outline-dark'
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default FavoritesBox;
