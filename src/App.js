

import React from 'react';
import ResourceHome from './pages/ResourceHome';
import ResourceNew from './pages/ResourceNew';
import About from './pages/About';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ResourceHome />
          </Route>
          <Route path="/new">
            <ResourceNew />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
