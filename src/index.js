import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
