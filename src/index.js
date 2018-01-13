import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom'
import './index.css';
import './atoms.css'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory, createHashHistory } from 'history'


const configureHistory = () => {
  return window.matchMedia('(display-mode: standalone)').matches
    ? createHashHistory()
    : createBrowserHistory()
}

const history = configureHistory();


const Index = () => (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
