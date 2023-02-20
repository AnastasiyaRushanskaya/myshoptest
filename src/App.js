import { useState, useEffect } from 'react';
import productArray from './productArray';
import ProductList from './ProductsList';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import FavoritesBox from './FavoritesBox';
import ShoppingBag from './ShoppingBag';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import RequestSignin from './RequestSignin';
import {
  newArrivals,
  trendingnow,
  bestSellers,
  dresses,
  skirts,
  tShirts,
  blazers,
  coats,
  shoes,
  accessories,
} from './categoryTypes';

function App() {
  const products = productArray;
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sizeErrorMessage, setSizeErrorMessage] = useState('');
  const [twoItemsInLine, setTwoItemsInLine] = useState(false);
  const [threeItemsInLine, setThreeItemsInLine] = useState(true);

  function changeSizeToSmall() {
    if (!threeItemsInLine) {
      setThreeItemsInLine(true);
      setTwoItemsInLine(false);
      console.log('ololo');
    }
  }

  function changeSizeToBig() {
    if (!twoItemsInLine) {
      setTwoItemsInLine(true);
      setThreeItemsInLine(false);
    }
  }

  function changeQuantityValue(id, size, value) {
    const copy = cart.map((prod) => {
      if (prod.id === id && prod.size === size) {
        const quantity = value ? value : prod.quantity + 1;
        return { ...prod, quantity: +quantity };
      } else {
        return prod;
      }
    });
    setCart(copy);
  }

  useEffect(() => {
    let timerId = setTimeout(() => setSizeErrorMessage(null), 4000);
    return () => clearTimeout(timerId);
  }, [sizeErrorMessage]);

  function startSearch(event) {
    setSearchValue(event.target.value);
    setSearchResults(
      products.filter((product) => product.name.includes(event.target.value))
    );
  }

  function checkProductInCart(id, size) {
    const result = cart.filter((item) => {
      const matchId = item.id === id;
      const matchSize = item.size === size;
      return matchId && matchSize;
    });

    if (result.length === 0) return false;
    return true;
  }

  function addToCart(id, size) {
    if (size === '') {
      setSizeErrorMessage('Please select size');
      return;
    }

    if (checkProductInCart(id, size)) {
      changeQuantityValue(id, size);
      return;
    }

    products.map((prod) => {
      if (prod.id === id) {
        setCart([...cart, { ...prod, size: size, quantity: 1 }]);
        console.log(prod.quantity);
      }
    });
  }

  function calculateShoppingBagItemsNumber() {
    if (cart.length !== 0) {
      const result = cart
        .map((item) => item.quantity)
        .reduce((sum, current) => sum + current);
      return result;
    } else {
      return 0;
    }
  }
  const shoppingBagItemsNumber = calculateShoppingBagItemsNumber();

  function addToFavorites(id) {
    products.map((prod) => {
      if (prod.id === id) {
        setFavorites([...favorites, prod]);
      }
    });
  }

  function removeFromFavorites(id) {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }

  function checkIsInFavorites(id) {
    if (favorites.find((favorite) => favorite.id === id)) {
      return true;
    }
    return false;
  }

  function toggleInFavorites(id) {
    if (checkIsInFavorites(id)) {
      removeFromFavorites(id);
      return;
    }
    addToFavorites(id);
  }

  function removeFromCart(index) {
    console.log(index);
    const copy = Object.assign([], cart);
    copy.splice(index, 1);
    setCart(copy);
  }

  function clearFavoritesBox() {
    setFavorites([]);
  }
  return (
    <>
      {' '}
      {sizeErrorMessage && (
        <div
          style={{
            textAlign: 'center',
            position: 'fixed',
            width: '200px',
            height: '25px',
            fontSize: '0.9em',
            color: '#faf9f8',
            borderRadius: '8px',
            opacity: '0.75',
            backgroundColor: 'black',
            top: '210px',
            left: '550px',
            paddingTop: '4px',
            zIndex: 99,
          }}
        >
          {' '}
          <i className='bi bi-patch-exclamation'></i>
          {'  '}
          {sizeErrorMessage}
        </div>
      )}{' '}
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                cart={cart}
                searchValue={searchValue}
                favorites={favorites}
                shoppingBagItemsNumber={shoppingBagItemsNumber}
                startSearch={startSearch}
                removeFromCart={removeFromCart}
                toggleInFavorites={toggleInFavorites}
                checkIsInFavorites={checkIsInFavorites}
                addToCart={addToCart}
                clearFavoritesBox={clearFavoritesBox}
                changeQuantityValue={changeQuantityValue}
              />
            }
          >
            <Route
              index
              element={
                <ProductList
                  products={searchValue ? searchResults : products}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/shoppingBag'
              element={
                <ShoppingBag
                  products={cart}
                  shoppingBagItemsNumber={shoppingBagItemsNumber}
                  removeFromCart={removeFromCart}
                  checkIsInFavorites={checkIsInFavorites}
                  toggleInFavorites={toggleInFavorites}
                  changeQuantityValue={changeQuantityValue}
                  width='800px'
                  buttonWidth='220px'
                  itemBoxWidth='27%'
                />
              }
            />
            <Route
              path='/favorites'
              element={
                <FavoritesBox
                  products={favorites}
                  toggleInFavorites={toggleInFavorites}
                  addToCart={addToCart}
                  checkIsInFavorites={checkIsInFavorites}
                  clearFavoritesBox={clearFavoritesBox}
                  width='800px'
                  buttonWidth='220px'
                  itemBoxWidth='27%'
                />
              }
            />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/requestSignin' element={<RequestSignin />} />
            <Route
              path='/New_Arrivals'
              element={
                <ProductList
                  products={newArrivals}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Trending_now'
              element={
                <ProductList
                  products={trendingnow}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/BestSellers'
              element={
                <ProductList
                  products={bestSellers}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Dresses'
              element={
                <ProductList
                  products={dresses}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Skirts'
              element={
                <ProductList
                  products={skirts}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/T-Shirts'
              element={
                <ProductList
                  products={tShirts}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Blazers'
              element={
                <ProductList
                  products={blazers}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Coats'
              element={
                <ProductList
                  products={coats}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Shoes'
              element={
                <ProductList
                  products={shoes}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
            <Route
              path='/Accessories'
              element={
                <ProductList
                  products={accessories}
                  twoItemsInLine={twoItemsInLine}
                  threeItemsInLine={threeItemsInLine}
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                  changeSizeToBig={changeSizeToBig}
                  changeSizeToSmall={changeSizeToSmall}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
