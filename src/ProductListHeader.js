import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ProductsListHeader({
  products,
  twoItemsInLine,
  threeItemsInLine,
  changeSizeToBig,
  changeSizeToSmall,
}) {
  const currentLocation = useLocation();
  const itemsCategory = currentLocation.pathname.slice(1).replace('_', ' ');

  return (
    <Row className='text-center fs-md py-1'>
      <Col xs={6} md={4}>
        {itemsCategory || 'All products'}
      </Col>
      <Col xs={6} md={4}>
        {products.length} items
      </Col>
      <Col md={4} className='d-none d-sm-flex'>
        <Col xs={6} onClick={changeSizeToBig} className='text-end px-1'>
          <i
            className={twoItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
          ></i>
          <i
            className={twoItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
          ></i>
        </Col>
        <Col xs={6} onClick={changeSizeToSmall} className='text-start'>
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
          ></i>
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
          ></i>
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
          ></i>
        </Col>
      </Col>
    </Row>
  );
}

export default ProductsListHeader;
