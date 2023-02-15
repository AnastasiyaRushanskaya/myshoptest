import Header from './Header';
import NavigationList from './Navigationlist';
import ShoppingBag from './ShoppingBag';
import FavoritesBox from './FavoritesBox';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import SignInBanner from './SignInBanner';

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
  const inShoppingBagpage = useLocation().pathname === '/shoppingBag';
  const inFavoritesPage = useLocation().pathname === '/favorites';
  const inRegisterPage = useLocation().pathname === '/register';
  const inLoginPage = useLocation().pathname === '/login';

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
        {!inRegisterPage && !inLoginPage && <SignInBanner />}
        <Outlet />
      </div>
      <div style={{ display: 'inline-block', verticalAlign: 'text-top' }}>
        {!inShoppingBagpage && !inRegisterPage && (
          <ShoppingBag
            products={cart}
            width='350px'
            buttonWidth='220px'
            removeFromCart={removeFromCart}
            toggleInFavorites={toggleInFavorites}
            checkIsInFavorites={checkIsInFavorites}
          />
        )}

        {!inFavoritesPage && !inRegisterPage && (
          <FavoritesBox
            products={favorites}
            width='350px'
            buttonWidth='220px'
            addToCart={addToCart}
            toggleInFavorites={toggleInFavorites}
            checkIsInFavorites={checkIsInFavorites}
            clearFavoritesBox={clearFavoritesBox}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
