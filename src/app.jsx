import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
