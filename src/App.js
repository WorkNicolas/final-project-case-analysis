import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/commons/Header'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
