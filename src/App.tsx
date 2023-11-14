import './App.css';

import React, { useState } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title="MKS" subtitle="Sistemas" productsCount={10} />
      <Footer />
    </div>
  );
}

export default App;
