import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import App from '../pages/App';

const BasicRouter = () => {
  <HashRouter>
    <Switch>
      <Route
        path="/index"
        component={() => (
          <App>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/index" component={Home}></Route>
            <Route exact path="/index/home" component={Home}></Route>
          </App>
        )}
      ></Route>
    </Switch>
  </HashRouter>;
};

export default BasicRouter;
