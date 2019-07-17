import React from 'react';

import BatteryConsiderateMedia from './components/BatteryConsiderateMedia';
import BatteryUI from './components/BatteryUI';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BatteryUI />
        <BatteryConsiderateMedia />
      </header>
    </div>
  );
};

export default App;
