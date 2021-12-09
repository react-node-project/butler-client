import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/index';

import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { PATH_ROOT, PATH_USER_SIGNIN } from './constants/PathConstants';
import AuthFlip from './pages/user/AuthFlip';
import { SideNav } from './components/Address/layouts/SideBar';

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
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled(Box)({
  padding: '74px 10px 10px 10px',
});
