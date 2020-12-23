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

const kitToken: string = process.env.FONTAWESOME_KIT ?? '';
// Append fontawesome
if (document.querySelectorAll(`src[data-fa-token="${kitToken}"]`).length === 0) {
  const script = document.createElement('script');
  script.setAttribute('src', `https://kit.fontawesome.com/${kitToken}.js`);
  script.setAttribute('crossorigin', 'anonymous');

  document.head.append(script);
}

// @ts-expect-error - Needed for webpack hot reloading, as TS doesn't recognize module.hot
module?.hot?.accept();
