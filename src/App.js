import { useState, useEffect } from 'react';

import productArray from './productList';
import ProductList from './ProductsList';
import React from 'react';
import ShoppingBagPage from './ShoppingBagPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  const [products, setProducts] = useState(productArray);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [navigationResults, setNavigationResults] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [message, setMessage] = useState('');

  useEffect(() => {
    let timerId = setTimeout(() => setMessage(null), 4000);
    return () => clearTimeout(timerId);
  }, [message]);

  function searchNavigationResults(tag) {
    if (tag === 'All products') {
      setNavigationResults(null);
      return;
    }
    setNavigationResults(
      products.filter((product) => product.category.includes(tag))
    );
  }

  function startSearch(event) {
    setSearchValue(event.target.value);
    setSearchResults(
      products.filter((product) => product.name.includes(event.target.value))
    );
  }

  function addToCart(id, size) {
    if (size === '') {
      setMessage('Please select size');
      return;
    }

    products.map((prod) => {
      if (prod.id === id) {
        setCart([...cart, { ...prod, size }]);
      }
    });
  }

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
      {message && (
        <div
          style={{
            textAlign: 'center',
            position: 'absolute',
            width: '200px',
            height: '25px',
            fontSize: '0.9em',
            color: '#faf9f8',
            borderRadius: '8px',
            opacity: '0.75',
            backgroundColor: 'black',
            top: '75px',
            left: '550px',
            paddingTop: '4px',
            zIndex: 99,
          }}
        >
          {' '}
          <i className='bi bi-patch-exclamation'></i>
          {'  '}
          {message}
        </div>
      )}{' '}
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                cart={cart}
                searchNavigationResults={searchNavigationResults}
                startSearch={startSearch}
                searchValue={searchValue}
                removeFromCart={removeFromCart}
                toggleInFavorites={toggleInFavorites}
                checkIsInFavorites={checkIsInFavorites}
                favorites={favorites}
                addToCart={addToCart}
                clearFavoritesBox={clearFavoritesBox}
              />
            }
          >
            <Route
              index
              element={
                <ProductList
                  products={
                    searchValue
                      ? searchResults
                      : navigationResults
                      ? navigationResults
                      : products
                  }
                  addToCart={addToCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
                />
              }
            />
            <Route
              path='/shoppingBag'
              element={
                <ShoppingBagPage
                  cart={cart}
                  removeFromCart={removeFromCart}
                  toggleInFavorites={toggleInFavorites}
                  checkIsInFavorites={checkIsInFavorites}
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
