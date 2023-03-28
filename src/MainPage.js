import { Outlet, useLocation } from 'react-router-dom';
import NavigationList from './Navigationlist';
import ShoppingBag from './ShoppingBag';
import FavoritesBox from './FavoritesBox';
import SignInBanner from './SignInBanner';
import NavigationBanner from './NavigationBanner';
import { useContext } from 'react';
import Context from './Context';
import { Row, Col } from 'react-bootstrap';

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
  const inForgotPasswordPage = useLocation().pathname === '/requestSignin';

  return (
    <Row>
      <Col xs className='d-md-flex d-none'>
        <NavigationList startSearch={startSearch} searchValue={searchValue} />
      </Col>
      <Col md={7}>
        {!value.isLogin &&
          !inRegisterPage &&
          !inLoginPage &&
          !inAccountPage &&
          !inForgotPasswordPage && <SignInBanner />}
        {!inRegisterPage &&
          !inLoginPage &&
          !inAccountPage &&
          !inForgotPasswordPage &&
          !inFavoritesPage &&
          !inShoppingBagpage && <NavigationBanner />}
        <Outlet />
      </Col>
      <Col md={3}>
        {!inShoppingBagpage &&
          !inAccountPage &&
          !inRegisterPage &&
          !inLoginPage &&
          !inForgotPasswordPage && (
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
          !inForgotPasswordPage && (
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
      </Col>
    </Row>
  );
}

export default MainPage;
