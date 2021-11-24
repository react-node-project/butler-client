import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import Header from './components/Header/index';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { PATH_USER_SIGNIN, PATH_USER_SIGNUP, PATH_ROOT } from './constants/PathConstants';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Main component="main">
          <Routes>
            <Route path={PATH_USER_SIGNUP} element={<SignUp />} />
            <Route path={PATH_USER_SIGNIN} element={<SignIn />} />
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
