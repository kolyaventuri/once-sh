import * as React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Blagl from '@kolyaventuri/blagl-icon';

import Navigation from './components/nav';
import * as routes from '../constants/routes';
import {hasNav} from '../constants/navigation';

import NotFound from './pages/not-found';
import Home from './pages/home';

import './styles/global.css';
import {isMobile} from '../utils/device';

const iconClick = (): void => {
  window?.open?.('https://blagl.xyz/?ref=once', '_blank');
};

const App = (): JSX.Element => {
  const location = useLocation();
  const {pathname = ''} = location;

  return (
    <>
      {hasNav[pathname] && <Navigation/>}
      <Switch>
        <Route exact path={routes.HOME}>
          <Home/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <div className="absolute bottom-0 right-0 p-2">
        <Blagl onClick={iconClick} type={isMobile ? 'simple' : 'expanding'}/>
      </div>
    </>
  );
};

export default App;
