import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header/index';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';

export default function App() {
  return (
    <>
      <Header />
      <Main component="main">
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </>
  );
}

const Main = styled(Box)({
  paddingTop: '64px',
});
