import React from 'react';
import './App.css';
import Items from './components/Items';
import itemsData from './data/items';

function App() {
  return (
    <div className="App">
      <Items items={itemsData.baseItems} />
      <Items items={itemsData.combinedItems} />
    </div>
  );
}

export default App;
