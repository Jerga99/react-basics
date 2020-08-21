

import React, { useState } from 'react';
import ResourceHome from './pages/ResourceHome';
import ResourceNew from './pages/ResourceNew';
import ResourceDetail from './pages/ResourceDetail';
import About from './pages/About';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const DEFAULT_SETTINGS = {
  theme: 'light', fontSize: '17'
}

export const SettingsContext = React.createContext(DEFAULT_SETTINGS);

const App = () => {
  const [settings, setSettings] = useState(getSettings());

  function getSettings() {
    debugger
    const settings = localStorage.getItem('resource-settings');
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
  }

  function saveSettings(settings) {
    localStorage.setItem('resource-settings', JSON.stringify(settings));
    setSettings(settings)
  }

  const settingsApi = {
    settings,
    saveSettings
  }

  return (
    <SettingsContext.Provider value={settingsApi}>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <ResourceHome />
            </Route>
            <Route path="/resources/new">
              <ResourceNew />
            </Route>
            <Route path="/resources/:id">
              <ResourceDetail />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </SettingsContext.Provider>
  )
}

export default App;
