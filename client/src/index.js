import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from'./components/App';

import SignIn from './components/SignIn';
import RegKey from './components/RegKey';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import reducers from './reducers';

import AuthGuard from './components/HOCs/AuthGuard';

const jwtToken = localStorage.getItem('JWT_TOKEN');

const store = createStore(reducers, {
        auth:{
            token: jwtToken,
            isAuthenticated: jwtToken ? true: false
        }
    },
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
)

axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <App>        
        <Route exact path="/" component={SignIn} />
        <Route exact path="/regkey" component={RegKey} />
        <Route exact path="/signup" component={SignUp} />
        <AuthGuard exact path="/dashboard" type="private">  
          <Dashboard />
        </AuthGuard>    
      </App>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
