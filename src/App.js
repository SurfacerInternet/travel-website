import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './App.css';
import TourPage from './pages/TourPage'


function App() {
  return (
    <div>
    <Header />
    <HomePage />
    <TourPage/>
    </div>
  
  );
}

export default App;
