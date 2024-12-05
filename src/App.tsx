import React from 'react';
import './App.css';
import ColorCombinations from './components/TextAndBackgroundCombination/ColorCombinations';
import MultiStepForm from './components/MultiStepsForm/MultiStepForm';

const App: React.FC = () => {
  return (
    <>
      <ColorCombinations />;
      <MultiStepForm />;
    </>
  );
};

export default App;
