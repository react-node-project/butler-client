import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}
