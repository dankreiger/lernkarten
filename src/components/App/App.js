import React from 'react';
import { Switch, Route } from 'react-router-dom'

// components

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import Flashcard from '../Flashcard/FlashcardContainer';
import vocabulary from '../../static/vocabulary';

import './App.css';

const App = ({history, location}) => {
  return (
    <div className="App">
      <div className="Layout">
        <Navigation location={location}/>
          <div className="full-width app-routes-container" id="app-routes">
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/german" component={LanguageMenu}/>
            <Route exact path="/russian" component={LanguageMenu}/>
            <Route path="/german/:topic" render={ ()=> <Flashcard history={history} location={location} words={vocabulary.german}/> } />
            <Route path="/russian/:topic" render={ ()=> <Flashcard history={history} location={location} words={vocabulary.russian}/> } />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
