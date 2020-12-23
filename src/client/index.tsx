import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app';

const container = document?.querySelector('#app');

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), container);

// @ts-expect-error - Needed for webpack hot reloading, as TS doesn't recognize module.hot
module?.hot?.accept();
