import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Result/Result';
import requests from './components/requests'

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">

      <Header />

      <Navbar setSelectedOption={setSelectedOption} />

      <Result selectedOption={selectedOption} />

    </div>
  );
}

export default App;
