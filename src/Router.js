import React from 'react';
import { Switch, Route } from 'react-router-dom'
import vocabulary from './static/vocabulary';

import Home from './components/Home/Home';
import LanguageMenu from './components/LanguageMenu/LanguageMenu';
import FlashcardContainer from './components/Flashcard/FlashcardContainer';
import QuizMenu from './components/QuizMenu/QuizMenu';
import QuizContainer from './components/QuizContainer/QuizContainer';

const Router = ({history, location}) => {
  return(
    <div className="full-width app-routes-container" id="app-routes">
      <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/german" component={LanguageMenu}/>
        <Route exact path="/russian" component={LanguageMenu}/>
        <Route exact path="/quiz" component={QuizMenu}/>
        {/* <Route exact path="/quiz/german" language='german' component={QuizContainer}/>
        <Route exact path="/quiz/russian" language='russian' component={QuizContainer}/>
        <Route path="/quiz/german/:topic" language='german' component={QuizContainer}/>
        <Route path="/quiz/russian/:topic" language='russian' component={QuizContainer}/> */}
        <Route path="/german/:topic" render={ ()=> <FlashcardContainer history={history} language='german' location={location} words={vocabulary.german}/> } />
        <Route path="/russian/:topic" render={ ()=> <FlashcardContainer history={history} language='russian' location={location} words={vocabulary.russian}/> } />
      </Switch>
    </div>
  );
}

export default Router;
