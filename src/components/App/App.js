import React from 'react';

// react-router
import { Switch, Route } from 'react-router-dom'

// react-transition-group
import { TransitionGroup } from 'react-transition-group'

// components
import Layout from '../../helpers/Layout/Layout';
import PageFade from '../../helpers/PageFade/PageFade';

import Home from '../Home/Home';
import German from '../German/German';
import Russian from '../Russian/Russian';

const App = ({location}) => {

  return (
    <div className="App">
      <Layout>
        <TransitionGroup>
          <PageFade key={location.pathname}>
            <div className="full-width" id="app-routes">
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/german" component={German}/>
                <Route path="/russian" component={Russian}/>
              </Switch>
            </div>
          </PageFade>
        </TransitionGroup>
      </Layout>
    </div>
  );
}

export default App;
