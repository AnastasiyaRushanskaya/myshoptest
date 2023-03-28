import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NavigationList from './Navigationlist';
import ShoppingBag from './ShoppingBag';
import FavoritesBox from './FavoritesBox';
import Footer from './Footer';
import SignInBanner from './SignInBanner';
import MainBanner from './MainBanner';
import { useContext } from 'react';
import Context from './Context';

function MainPage({
  cart,
  searchValue,
  favorites,
  shoppingBagItemsNumber,
  startSearch,
  removeFromCart,
  toggleInFavorites,
  checkIsInFavorites,
  addToCart,
  clearFavoritesBox,
  changeQuantityValue,
}) {
  const value = useContext(Context);
  const inMainPage = useLocation().pathname === '/';
  const inShoppingBagpage = useLocation().pathname === '/shoppingBag';
  const inFavoritesPage = useLocation().pathname === '/favorites';
  const inRegisterPage = useLocation().pathname === '/register';
  const inLoginPage = useLocation().pathname === '/login';
  const inAccountPage = useLocation().pathname === '/account';
  const inRequestSigninPage = useLocation().pathname === '/requestSignin';

  return (
    <>
      <NavigationList startSearch={startSearch} searchValue={searchValue} />
      <div
        className='d-inline-block'
        style={{
          width: '800px',
          verticalAlign: 'text-top',
        }}
      >
        {!value.isLogin &&
          !inRegisterPage &&
          !inLoginPage &&
          !inAccountPage &&
          !inRequestSigninPage && <SignInBanner />}
        {!inRegisterPage &&
          !inLoginPage &&
          !inAccountPage &&
          !inRequestSigninPage &&
          !inFavoritesPage &&
          !inShoppingBagpage && <MainBanner />}
        <Outlet />
      </div>
      <div
        className='d-inline-block'
        style={{
          verticalAlign: 'text-top',
          marginLeft: '60px',
        }}
      >
        {!inShoppingBagpage &&
          !inAccountPage &&
          !inRegisterPage &&
          !inLoginPage &&
          !inRequestSigninPage && (
            <ShoppingBag
              products={cart}
              shoppingBagItemsNumber={shoppingBagItemsNumber}
              inShoppingBagpage={inShoppingBagpage}
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
          !inAccountPage &&
          !inRegisterPage &&
          !inLoginPage &&
          !inRequestSigninPage && (
            <FavoritesBox
              products={favorites}
              inFavoritesPage={inFavoritesPage}
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
    </>
  );
}

export default MainPage;
