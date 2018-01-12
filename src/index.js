// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// react + react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// react-router
import { Route, BrowserRouter as Router } from 'react-router-dom'

// css
import './index.css';
import './atoms.css'

// imported components
import App from './components/App/App';

// service worker
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
