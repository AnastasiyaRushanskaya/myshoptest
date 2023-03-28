import React from 'react';
import CustomButton from './CustomButton';
import ProductImage from './ProductImage';
import AddToFavoritesIcon from './AddToFavoritesIcon';
import QuantityOption from './QuantityOption';
import { Col, Row } from 'react-bootstrap';

function ShoppingBagProductBox({
  product,
  removeFromCart,
  inFavorites,
  toggleInFavorites,
  changeQuantityValue,
}) {
  const { name, cost, src, id, size, quantity } = product;
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
          <Col xs={12}>Size: {size}</Col>
          <Col xs={6}>
            <QuantityOption
              quantity={quantity}
              changeQuantityValue={(event) =>
                changeQuantityValue(id, size, event.target.value)
              }
            />
          </Col>
          <Col xs={12}>
            <AddToFavoritesIcon
              inFavorites={inFavorites}
              clickHandler={() => toggleInFavorites(id)}
            />
            {'  '}
            <CustomButton
              text='remove'
              clickHandler={removeFromCart}
              iconName='bi bi-bag'
              variant='dark'
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default ShoppingBagProductBox;
