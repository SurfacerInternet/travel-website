import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './App.css';
import TourPage from './pages/TourPage'
import ItineraryPage from './pages/ItineraryPage';


function App() {
  return (
    <div>
    <Header />
    <HomePage />
    <TourPage/>
    <ItineraryPage />
    </div>
  
  );
}

export default App;
