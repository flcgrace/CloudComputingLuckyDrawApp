import React, { Component } from 'react';
import Front from './frontPage';
import Lucky from './LuckyDrawForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          path ="/"
          element={<Front />}
        />

        <Route
          path ="/Lucky"
          element={<Lucky />}
        />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
