import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Projects } from './Pages/Projects/Projects';
import { Index } from './Pages/Index/Index';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
=======
>>>>>>> fed1e85b4c916d30af13efec5b40cc3c05708027

const App: React.FC = () => {
  return (
    <div className="app">
<<<<<<< HEAD
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
=======
      <Navbar />
      <Index />
>>>>>>> fed1e85b4c916d30af13efec5b40cc3c05708027
    </div>
  );
};

export default App;
