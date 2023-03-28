import React from 'react';
import CustomButton from './CustomButton';
import SizeOption from './SizeOption';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

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
    <Col className='py-2'>
      <Row>
        <Row xs={12} as='p' className='justify-content-center'>
          {name}
        </Row>
        <Col xs={6}>
          <ProductImage src={src} />
        </Col>
        <Col
          xs={6}
          className='d-flex flex-column justify-content-between fs-sm'
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
              clickHandler={() => addToCart(id, size)}
              iconName='bi bi-bag'
              variant='dark'
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default FavoritesProductBox;
