import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import { Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
