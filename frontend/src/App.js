import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage';

const Pages = () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/game">
        <Gamepage />
      </Route>
    </>
  )
};

const App = () => {
  return (
    <>
      <h1>Singapore Stack Exchange</h1>
    </>
  );
};

export default App;
