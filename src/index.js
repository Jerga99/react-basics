
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

// const h1Element = React.createElement('h1', null, 'Hello World');

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Hello World</h1>
    </div>
    {/* { React.createElement('div', { className: 'container' }, h1Element) } */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster you can change
// unregister() to register()
serviceWorker.unregister();
