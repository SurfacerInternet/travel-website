import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import TourPage from './pages/TourPage'
import ItineraryPage from './pages/ItineraryPage';
import AboutPage from './pages/AboutPage';
import './App.css';

import Footer from './components/Footer';



function App() {


  return (

    <div className='App'>
    <Header />
    <Routes>
    <Route path='/' element={<HomePage />} /> 
    <Route path='tours' element={<TourPage />} />
    <Route path='itineraryForm' element={<ItineraryPage />} />
    <Route path='about' element={<AboutPage />} />
    </Routes >
    <Footer />
    </div>
  
  );
}

export default App;
