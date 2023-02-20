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
      style={{
        display: 'flex',
        width: '100%',
        height: 'auto',
        marginTop: '5px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '30%',
          fontSize: '0.7em',
          fontWeight: 'bold',
        }}
      >
        {itemsCategory || 'All products'}
      </div>
      <div
        style={{
          width: '30%',
          textAlign: 'center',
          fontSize: '0.7em',
          fontWeight: 'bold',
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
          style={{
            display: 'inline-block',
            paddingLeft: '10px',
            cursor: 'pointer',
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
          style={{
            display: 'inline-block',
            paddingLeft: '10px',
            cursor: 'pointer',
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
