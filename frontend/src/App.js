import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage';
import Test from './pages/Test';
import Navbar from './components/Navbar';
import { styled } from '@mui/material/styles';

const Space = styled('div')({
  height: '64px',
});

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
      <Space />
      <Pages />
    </>
  );
};

export default App;
