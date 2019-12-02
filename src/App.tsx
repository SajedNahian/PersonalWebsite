import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Projects } from './Pages/Projects/Projects';
import { Index } from './Pages/Index/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
