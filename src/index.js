import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Wall from './components/Wall';
import Notificatio from './components/Notificatio';
import adminView from './components/adminView';
import adminRutas from './components/adminRutas';
import Checklist from './components/Checklist';
import Contact from './components/Contact';

ReactDOM.render(
    <BrowserRouter basename = { process.env.PUBLIC_URL } >
      <div>
              <Route exact path = '/' component = { App } />
              <Route path = '/login' component = { Login } />
              <Route path = '/home' component = { Wall } />
              <Route path = '/notific' component = { Notificatio } />
              <Route path = '/adminView' component = { adminView } />
              <Route path = '/adminRutas' component = { adminRutas } />
              <Route path = '/Checklist' component = { Checklist } />
              <Route path = '/Contact' component = { Contact } />
        </div>
      </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();