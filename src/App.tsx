import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Projects } from './Pages/Projects/Projects';
import { Index } from './Pages/Index/Index';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Index />
    </div>
  );
};

export default App;
