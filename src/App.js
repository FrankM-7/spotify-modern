import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import Player from './Player/Player';
import MainContent from './MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Player />
    </div>
  );
}

export default App;
