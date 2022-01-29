import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home';
import { Header, SideNav } from './components/layouts';
import Home from './pages/Home';

import Box from '@mui/material/Box';
import {
  PATH_API_DOCS,
  PATH_HISTORY,
  PATH_PAYMENTS,
  PATH_RECEIPT,
  PATH_RESTAURANTS,
  PATH_RESTAURANTS_DETAIL,
  PATH_ROOT,
  PATH_USER_LOGIN
} from './constants/PathConstants';
import AuthFlip from './pages/user/AuthFlip';
import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import StorePage from './pages/store/StorePage';
import PaymentsPage from './pages/payments/PaymentsPage';
import { KAKAO_API_KEY } from './constants/EnvContant';
import { ApiDocs } from './pages/api-docs/ApiDocs';
import FavList from './components/layouts/FavList';
import HistoryPage from './pages/history/HistoryPage';
import ReceiptPage from './pages/history/ReceiptPage';

export default function App() {
  const [isShowSideNav, setIsShowSideNav] = useState(false);
  const showSideNav = () => setIsShowSideNav(true);
  const hideSideNav = () => setIsShowSideNav(false);

  const [isShowFavList, setIsShowFavList] = useState(false);
  const showFavList = () => setIsShowFavList(true);
  const hideFavList = () => setIsShowFavList(false);
  const { Kakao } = window;

  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(KAKAO_API_KEY);
  }

  return (
    <>
      <Router>
        <Header showSideNav={showSideNav} showFavList={showFavList} />
        <SideNav isShowSideNav={isShowSideNav} hideSideNav={hideSideNav} />
        <FavList isShowSideNav={isShowFavList} hideSideNav={hideFavList} />
        <Box component="main">
          <Routes>
            <Route path={PATH_USER_LOGIN} element={<AuthFlip />} />
            <Route path={PATH_ROOT} element={<Home />} />
            <Route path={PATH_RESTAURANTS} element={<RestaurantsPage />} />
            <Route path={PATH_RESTAURANTS_DETAIL} element={<StorePage />} />
            <Route path={PATH_HISTORY} element={<HistoryPage />} />
            <Route path={PATH_RECEIPT} element={<ReceiptPage />} />
            <Route path={PATH_API_DOCS} element={<ApiDocs />} />
            <Route path={PATH_PAYMENTS} element={<PaymentsPage />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
