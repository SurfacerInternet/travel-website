import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import TourPage from './pages/TourPage'
import ItineraryPage from './pages/ItineraryPage';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (

    <div className='App'>
    <Header />
    <Routes>
    <Route path='/' element={<HomePage />} /> 
    <Route path='tours' element={<TourPage />} />
    <Route path='itineraryForm' element={<ItineraryPage />} />
    </Routes>
    <Footer />
    </div>
  
  );
}

export default App;
