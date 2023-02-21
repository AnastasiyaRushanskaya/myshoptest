import Header from './Header';
import NavigationList from './Navigationlist';
import ShoppingBag from './ShoppingBag';
import FavoritesBox from './FavoritesBox';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import SignInBanner from './SignInBanner';
import MainBanner from './MainBanner';

function MainPage({
  cart,
  searchValue,
  favorites,
  shoppingBagItemsNumber,
  isLogin,
  startSearch,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
  addToCart,
  clearFavoritesBox,
  changeQuantityValue,
}) {
  const inShoppingBagpage = useLocation().pathname === '/shoppingBag';
  const inFavoritesPage = useLocation().pathname === '/favorites';
  const inRegisterPage = useLocation().pathname === '/register';
  const inLoginPage = useLocation().pathname === '/login';
  const inProfilePage = useLocation().pathname === '/yourprofile';
  const inRequestSigninPage = useLocation().pathname === '/requestSignin';

  return (
    <div>
      <Header
        text='My Shop'
        shoppingBagItemsNumber={shoppingBagItemsNumber}
        favorites={favorites}
        isLogin={isLogin}
      />
      <NavigationList startSearch={startSearch} searchValue={searchValue} />
      <div
        style={{
          display: 'inline-block',
          width: '800px',
          verticalAlign: 'text-top',
        }}
      >
        {!inRegisterPage &&
          !inLoginPage &&
          !inProfilePage &&
          !inRequestSigninPage && <SignInBanner />}
        {!inRegisterPage &&
          !inLoginPage &&
          !inProfilePage &&
          !inRequestSigninPage &&
          !inFavoritesPage &&
          !inShoppingBagpage && <MainBanner />}
        <Outlet />
      </div>
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'text-top',
          marginLeft: '60px',
        }}
      >
        {!inShoppingBagpage &&
          !inRegisterPage &&
          !inLoginPage &&
          !inRequestSigninPage && (
            <ShoppingBag
              products={cart}
              shoppingBagItemsNumber={shoppingBagItemsNumber}
              removeFromCart={removeFromCart}
              checkIsInFavorites={checkIsInFavorites}
              toggleInFavorites={toggleInFavorites}
              changeQuantityValue={changeQuantityValue}
              width='300px'
              buttonWidth='220px'
              itemBoxWidth='100%'
            />
          )}

        {!inFavoritesPage &&
          !inRegisterPage &&
          !inLoginPage &&
          !inRequestSigninPage && (
            <FavoritesBox
              products={favorites}
              toggleInFavorites={toggleInFavorites}
              addToCart={addToCart}
              checkIsInFavorites={checkIsInFavorites}
              clearFavoritesBox={clearFavoritesBox}
              width='300px'
              buttonWidth='220px'
              itemBoxWidth='100%'
            />
          )}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
