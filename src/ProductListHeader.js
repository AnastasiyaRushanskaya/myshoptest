import React from 'react';
import { useLocation } from 'react-router-dom';

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
    <div
      className='d-flex align-items-center justify-content-spacw-between '
      style={{
        height: 'auto',
        marginTop: '5px',
      }}
    >
      <div
        className='font-weight-bold'
        style={{
          width: '30%',
          fontSize: '0.7em',
        }}
      >
        {itemsCategory || 'All products'}
      </div>
      <div
        className='text-align-center font-weight-bold'
        style={{
          width: '30%',
          fontSize: '0.7em',
        }}
      >
        {products.length} items
      </div>
      <div
        style={{
          width: '30%',
          textAlign: 'end',
        }}
      >
        <div
          className='d-inline-block c-pointer'
          style={{
            paddingLeft: '10px',
          }}
          onClick={changeSizeToBig}
        >
          <i
            className={twoItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
            style={{ paddingLeft: '1px' }}
          ></i>
          <i
            className={twoItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
            style={{ paddingLeft: '1px' }}
          ></i>
        </div>
        <div
          className='d-inline-block c-pointer'
          style={{
            paddingLeft: '10px',
          }}
          onClick={changeSizeToSmall}
        >
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
            style={{ paddingLeft: '1px' }}
          ></i>
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
            style={{ paddingLeft: '1px' }}
          ></i>
          <i
            className={threeItemsInLine ? 'bi bi-square-fill' : 'bi bi-square'}
            style={{ paddingLeft: '1px' }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ProductsListHeader;
