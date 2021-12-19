import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home';
import { Header, SideNav } from './components/layouts';

import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
<<<<<<< HEAD
import { PATH_ROOT, PATH_USER_SIGNIN, PATH_RESTAURANTS, PATH_RESTAURANTS_DETAIL } from './constants/PathConstants';
=======

import { PATH_ROOT, PATH_USER_SIGNIN, PATH_SHOP_DETAIL, PATH_RESTAURANTS } from './constants/PathConstants';
>>>>>>> d54d1f9 (menu items)
import AuthFlip from './pages/user/AuthFlip';
import ShopDetail from './components/ShopDetails/index';
import RestaurantsPage from './components/restaurants';

export default function App() {
  const [isShowSideNav, setIsShowSideNav] = useState(false);
  const showSideNav = () => setIsShowSideNav(true);
  const hideSideNav = () => setIsShowSideNav(false);

  return (
    <>
      <Router>
        <Header showSideNav={showSideNav} />
        <SideNav isShowSideNav={isShowSideNav} hideSideNav={hideSideNav} />
        <Main component="main">
          <Routes>
            <Route path={PATH_USER_SIGNIN} element={<AuthFlip />} />
            <Route path={PATH_ROOT} element={<Home />} />
            <Route path={PATH_RESTAURANTS} element={<RestaurantsPage />} />
<<<<<<< HEAD
            <Route path={PATH_RESTAURANTS_DETAIL} element={<ShopDetail />} />
=======
            <Route path={PATH_SHOP_DETAIL} element={<ShopDetail />} />
>>>>>>> d54d1f9 (menu items)
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled(Box)({
  padding: '74px 10px 10px 10px',
});
