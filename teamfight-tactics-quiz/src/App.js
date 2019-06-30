import React from 'react';
import './App.css';
import Items from './components/Items';
import itemsData from './data/items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Teamfight Tactics Quiz
      </header>
      <Items data={itemsData} />
    </div>
  );
}

export default App;
