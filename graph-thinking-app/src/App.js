import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="main-content">
        <Sidebar />
        <Canvas />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
