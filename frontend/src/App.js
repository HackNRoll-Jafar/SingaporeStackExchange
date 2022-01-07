import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage';
import Test from './pages/Test';
import Navbar from './components/Navbar';

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/game" element={<Gamepage />} />
      <Route exact path="/test" element={<Test />} />
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Singapore Stack Exchange</h1>
      <Pages />
    </>
  );
};

export default App;
