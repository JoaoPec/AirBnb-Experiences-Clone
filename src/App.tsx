import React from 'react';

//styles
import './App.module.css';

//Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}

export default App;
