import React from 'react';
import './App.css';
// import ItemList from './components/ItemList';
import itemsData from './data/items';
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <div className="App">
      <ItemGrid baseItems={itemsData.baseItems} combinedItems={itemsData.combinedItems} />
      {/* <ItemList items={itemsData.baseItems} />
      <ItemList items={itemsData.combinedItems} /> */}
    </div>
  );
}

export default App;
