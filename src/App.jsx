import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home';
import { Header, SideNav } from './components/layouts';
import Home from './pages/Home';

import Box from '@mui/material/Box';
import {
  PATH_API_DOCS,
  PATH_RESTAURANTS,
  PATH_RESTAURANTS_DETAIL,
  PATH_ROOT,
  PATH_USER_SIGNIN
} from './constants/PathConstants';
import AuthFlip from './pages/user/AuthFlip';
import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import StorePage from './pages/store/StorePage';
// import RestaurantDetail from './components/restaurantDetails/index';
import { KAKAO_API_KEY } from './constants/EnvContant';
import { ApiDocs } from './pages/api-docs/ApiDocs';

export default function App() {
  const [isShowSideNav, setIsShowSideNav] = useState(false);
  const showSideNav = () => setIsShowSideNav(true);
  const hideSideNav = () => setIsShowSideNav(false);
  const { Kakao } = window;

  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(KAKAO_API_KEY);
  }

  return (
    <>
      <Router>
        <Header showSideNav={showSideNav} />
        <SideNav isShowSideNav={isShowSideNav} hideSideNav={hideSideNav} />
        <Box component="main">
          <Routes>
            <Route path={PATH_USER_SIGNIN} element={<AuthFlip />} />
            <Route path={PATH_ROOT} element={<Home />} />
            <Route path={PATH_RESTAURANTS} element={<RestaurantsPage />} />
            <Route path={PATH_RESTAURANTS_DETAIL} element={<StorePage />} />
            <Route path={PATH_API_DOCS} element={<ApiDocs />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
