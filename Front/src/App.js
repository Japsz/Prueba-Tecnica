import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import store from './store/store'
import './App.css';
import './assets/css/bootstrap.min.css'
import PrivateRoute from "./components/common/PrivateRoute";
import Index from './views/Index'
import Login from './views/Login'

function App() {
  return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path={'/login'} component={Login}/>
            <PrivateRoute path={'/'} component={Index}/>
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
