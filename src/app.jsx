import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/index';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { PATH_USER_SIGNIN, PATH_ROOT } from './constants/PathConstants';
import AuthFlip from './pages/user/AuthFlip';
import ShopDetail from './components/ShopDetails/index';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Main component="main">
          <Routes>
            <Route path={PATH_USER_SIGNIN} element={<AuthFlip />} />
            <Route path={PATH_ROOT} element={<ShopDetail />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled(Box)({
  padding: '74px 10px 10px 10px',
});
