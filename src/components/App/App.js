import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Layout from '../../helpers/Layout/Layout';
import LanguageMenu from '../LanguageMenu/LanguageMenu';


const App = ({location}) => {
  return (
    <div className="App">
      <Layout location={location}>
        <div className="full-width" id="app-routes">
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route path="/german" component={LanguageMenu}/>
            <Route path="/russian" component={LanguageMenu}/>
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
