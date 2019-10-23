
import React from 'react';

import Header from './components/Header';
import CenterPanelInternal from './components/CenterPanelInternal';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <CenterPanelInternal />
      </div>
    </div>
  );
};

export default App;
