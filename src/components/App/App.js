import React from 'react';

// react-router
import { Switch, Route } from 'react-router-dom'

// components
import Layout from '../../helpers/Layout/Layout';

import Home from '../Home/Home';
import German from '../German/German';
import Russian from '../Russian/Russian';

const App = ({location}) => {

  return (
    <div className="App">
      <Layout>
        <div className="full-width" id="app-routes">
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route path="/german" component={German}/>
            <Route path="/russian/menu" component={Russian}/>
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
