import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage';

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/game" element={<Gamepage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <h1>Singapore Stack Exchange</h1>
      <Pages />
    </>
  );
};

export default App;
