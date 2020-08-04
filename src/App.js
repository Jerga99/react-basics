

import React from 'react';
import ResourceHome from './pages/ResourceHome';
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
            <h1>Resource new page</h1>
          </Route>
          <Route path="/detail">
            <h1>Resource detail page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
