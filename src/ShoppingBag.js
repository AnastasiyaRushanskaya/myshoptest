import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import ShoppingBagList from './ShoppingBagList';
import { isEmpty } from 'lodash';

function ShoppingBag({
  products,
  shoppingBagItemsNumber,
  inShoppingBagPage,
  removeFromCart,
  checkIsInFavorites,
  toggleInFavorites,
  changeQuantityValue,
  width,
  buttonWidth,
  itemBoxWidth,
}) {
  const navigate = useNavigate();

  console.log(products);
  return (
    <div
      style={{
        width: width,
        marginBottom: '20px',
        minHeight: '250px',
      }}
    >
      <h4 style={{ margin: '0px', textAlign: 'center' }}>
        <Link to='/shoppingBag' className='linkStyles'>
          <i className='bi bi-bag-check'></i> Shopping bag (
          {shoppingBagItemsNumber})
        </Link>
      </h4>
      {inShoppingBagPage && isEmpty(products) && (
        <p style={{ textAlign: 'center' }}>Your shopping bag is empty.</p>
      )}
      <ShoppingBagList
        products={products}
        removeFromCart={removeFromCart}
        toggleInFavorites={toggleInFavorites}
        checkIsInFavorites={checkIsInFavorites}
        changeQuantityValue={changeQuantityValue}
        itemBoxWidth={itemBoxWidth}
      />{' '}
      {products.length !== 0 && (
        <CustomButton
          text='continue to checkout'
          clickHandler={() => navigate('/shoppingBag')}
          width={buttonWidth}
          height='30px'
          marginLeft='20px'
          buttonBorder='1px solid black'
          buttonColor='#faf9f8'
          buttonTextColor='black'
        />
      )}
    </div>
  );
}

export default ShoppingBag;
