import React from 'react';
import Enharmonics from './components/Enharmonics';
import NaturalNotes from './components/NaturalNotes';
import Piano from './components/Piano';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <Enharmonics />
      <div className="piano-container">
        <Piano />
      </div>
      <NaturalNotes />
    </div>
  );
}

export default App;
