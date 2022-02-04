import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, SideNav } from './components/layouts';
import Box from '@mui/material/Box';
import { KAKAO_API_KEY } from './constants/EnvContant';
import FavList from './components/layouts/FavList';
import Routes from './config/route/Routes';
import ErrorBoundary from './config/route/ErrorBoundary';

export default function App() {
  const [isShow, setIsShow] = useState({
    sideNav: false,
    favList: false,
  });

  const showSideNav = () => setIsShow({ sideNav: true, favList: false });
  const showFavList = () => setIsShow({ sideNav: false, favList: true });
  const hideSideNav = () => setIsShow({ sideNav: false, favList: false });
  const hideFavList = () => setIsShow({ sideNav: false, favList: false });

  const { Kakao } = window;

  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(KAKAO_API_KEY);
  }

  return (
    <>
      <ErrorBoundary>
        <Router>
          <Header showSideNav={showSideNav} showFavList={showFavList} />
          <SideNav isShowSideNav={isShow.sideNav} hideSideNav={hideSideNav} />
          <FavList isShowSideNav={isShow.favList} hideSideNav={hideFavList} />
          <Box component="main">
            <Routes />
          </Box>
        </Router>
      </ErrorBoundary>
    </>
  );
}
