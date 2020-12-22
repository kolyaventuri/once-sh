import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NotFound from './pages/not-found';
import Home from './pages/home';

import './styles/global.css';

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
