import Header from './Header';
import NavigationList from './Navigationlist';
import ShoppingBag from './ShoppingBag';
import FavoritesBox from './FavoritesBox';
import { Outlet } from 'react-router-dom';

function MainPage({
  cart,
  searchNavigationResults,
  startSearch,
  searchValue,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
  favorites,
  addToCart,
  clearFavoritesBox,
}) {
  return (
    <div>
      <Header text='My Shop' products={cart} />
      <NavigationList
        searchNavigationResults={searchNavigationResults}
        startSearch={startSearch}
        searchValue={searchValue}
      />
      <div
        style={{
          display: 'inline-block',
          width: '800px',
          verticalAlign: 'text-top',
          marginLeft: '30px',
        }}
      >
        <Outlet />
      </div>
      <div style={{ display: 'inline-block', verticalAlign: 'text-top' }}>
        <ShoppingBag
          products={cart}
          removeFromCart={removeFromCart}
          toggleInFavorites={toggleInFavorites}
          checkIsInFavorites={checkIsInFavorites}
        />

        <FavoritesBox
          products={favorites}
          addToCart={addToCart}
          toggleInFavorites={toggleInFavorites}
          checkIsInFavorites={checkIsInFavorites}
          clearFavoritesBox={clearFavoritesBox}
        />
      </div>
    </div>
  );
}

export default MainPage;
