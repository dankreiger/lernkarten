import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import LanguageMenu from '../LanguageMenu/LanguageMenu';


const App = ({location}) => {
  return (
    <div className="App">
      <div className="Layout">
        <Navigation location={location}/>
        <div className="full-width" id="app-routes">
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route path="/german" component={LanguageMenu}/>
            <Route path="/russian" component={LanguageMenu}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
