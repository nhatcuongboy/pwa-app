import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
