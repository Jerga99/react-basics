
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster you can change
// unregister() to register()
serviceWorker.unregister();
