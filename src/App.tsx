import React from 'react';
import './App.css';
import ColorCombinations from './components/TextAndBackgroundCombination/ColorCombinations';
import MultiStepForm from './components/MultiStepsForm/MultiStepForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/color" element={<ColorCombinations />} />
      </Routes>
    </Router>
  );
}

export default App;
