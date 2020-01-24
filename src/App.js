import React from 'react';
import Title from './sections/Title/Title';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Values from './sections/Values/Values';
import Organizations from './sections/Organizations/Organizations';
import './App.js';

function App() {
  return (
    <div>
      <Title/>
        <About/>
        <Team/>
        <Values/>
        <Organizations/>
    </div>
  );
}

export default App;
