import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Header, SideNav } from './components/layouts';

import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { PATH_ROOT, PATH_USER_SIGNIN, PATH_RESTAURANTS } from './constants/PathConstants';
import AuthFlip from './pages/user/AuthFlip';
// import ShopDetail from './components/ShopDetails/index';
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
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled(Box)({
  padding: '74px 10px 10px 10px',
});
