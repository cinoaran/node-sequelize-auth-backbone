import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from'./components/App';
import Home from'./components/Home';
import SignIn from './components/SignIn';
import RegKey from './components/RegKey';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/regkey" component={RegKey} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </App>
  </BrowserRouter>, document.querySelector('#root'));


