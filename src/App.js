import { useState } from 'react';
import Header from './Header';
import NavigationList from './Navigationlist';
import productArray from './productList';
import ShoppingBag from './ShoppingBag';
import SearchBox from './SearchBox';
import ProductList from './ProductsList';
import FavoritesBox from './FavoritesBox';

function App() {
  const [products, setProducts] = useState(productArray);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  function startSearch(event) {
    setSearchValue(event.target.value);
    setSearchResults(
      products.filter((product) => product.name.includes(event.target.value))
    );
  }

  const inCartProducts = products.filter((prod) => prod.inCart === true);

  const inFavoritesProducts = products.filter(
    (prod) => prod.inFavorites === true
  );

  function addToCart(id) {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.inCart = true;
        }
        return prod;
      })
    );
  }

  function addToFavorites(id) {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.inFavorites = true;
        }
        return prod;
      })
    );
  }

  function removeFromCart(id) {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.inCart = false;
        }
        return prod;
      })
    );
  }

  function removeFromFavorites(id) {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.inFavorites = false;
        }
        return prod;
      })
    );
  }

  return (
    <div>
      <Header />
      <SearchBox startSearch={startSearch} searchValue={searchValue} />

      <NavigationList />
      <div
        style={{
          display: 'inline',
          position: 'absolute',
          left: '250px',
          top: '60px',
          maxWidth: '800px',
        }}
      >
        <ProductList
          products={searchValue ? searchResults : products}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
      <ShoppingBag
        products={inCartProducts}
        removeFromCart={removeFromCart}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      <FavoritesBox
        products={inFavoritesProducts}
        addToCart={addToCart}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
