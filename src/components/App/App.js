import React from 'react';
import Router from '../../Router';
import Navigation from '../Navigation/Navigation';

import './App.css';

const App = ({history, location}) => {
  return (
    <div className="App">
      <div className="Layout">
        <Navigation location={location}/>
        <Router history={history} location={location} />
      </div>
    </div>
  );
}

export default App;
