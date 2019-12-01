import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Projects } from './Pages/Projects/Projects';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Projects />
    </div>
  );
};

export default App;
