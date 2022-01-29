import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, SideNav } from './components/layouts';
import Box from '@mui/material/Box';
import { KAKAO_API_KEY } from './constants/EnvContant';
import FavList from './components/layouts/FavList';
import Routes from './config/route/Routes';
import ErrorBoundary from './config/route/ErrorBoundary';

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
      <ErrorBoundary>
        <Router>
          <Header showSideNav={showSideNav} showFavList={showFavList} />
          <SideNav isShowSideNav={isShowSideNav} hideSideNav={hideSideNav} />
          <FavList isShowSideNav={isShowFavList} hideSideNav={hideFavList} />
          <Box component="main">
            <Routes />
          </Box>
        </Router>
      </ErrorBoundary>
    </>
  );
}
