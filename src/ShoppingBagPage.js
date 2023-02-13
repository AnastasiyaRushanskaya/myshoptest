import { useEffect, useState } from 'react';
import Header from './Header';
import NavigationList from './Navigationlist';
import productArray from './productList';
import ShoppingBag from './ShoppingBag';
import ProductList from './ProductsList';
import FavoritesBox from './FavoritesBox';

function ShoppingBagPage({
  cart,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
}) {
  return (
    <div>
      <ShoppingBag
        products={cart}
        removeFromCart={removeFromCart}
        toggleInFavorites={toggleInFavorites}
        checkIsInFavorites={checkIsInFavorites}
      />
    </div>
  );
}

export default ShoppingBagPage;
