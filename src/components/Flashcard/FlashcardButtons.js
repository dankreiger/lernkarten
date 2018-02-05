import React from 'react';
import classNames from 'classnames';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Pulse from '../Pulse/Pulse';
import './FlashcardButtons.css';

const FlashcardButtons = ({quizInput, wordQuantity, previousCard, nextCard, sayWord, slowSayWord, artyomActive, quizActive, startQuiz, stopQuiz, currentCategory}) => {
  if(!quizActive){
    return(
      <ButtonToolbar className={classNames('button-toolbar', `btn-toolbar-${currentCategory}`)}>
        {wordQuantity > 1 && <Button bsStyle="default" bsSize="large" onClick={previousCard}>&#8592;</Button>}
        <Button className={classNames({'oneCard': wordQuantity === 1})} bsStyle="primary" bsSize="large" onClick={sayWord}>Say</Button>
        <Button className={classNames({'oneCard': wordQuantity === 1})} bsStyle="warning" bsSize="large" onClick={slowSayWord}>Slow</Button>
        {wordQuantity > 1 && <Button bsStyle="default" bsSize="large" onClick={nextCard}>&#8594;</Button>}
      </ButtonToolbar>
    )
  } else {
    return (
      <ButtonToolbar className={classNames('button-toolbar', `btn-toolbar-${currentCategory}`, 'quizButtonToolbar')}>
        <Button className={classNames('quizButton', {stopButton: artyomActive || quizInput, startButton: !artyomActive || !quizInput })} bsStyle={artyomActive || quizInput ? 'danger' : 'success'} bsSize="large" onClick={artyomActive || quizInput ? stopQuiz : startQuiz}>
          {artyomActive || quizInput ? 'Stop' : 'Start Quiz'} {artyomActive ? <Pulse/> : null}
          {artyomActive || quizInput && <span>{artyomActive ? 'read the word aloud' : 'type in the translation'}</span>}
        </Button>
        {artyomActive || quizInput && <Button className='quizButton nextButton' bsStyle='warning' onClick={nextCard}>&#8594;</Button>}
      </ButtonToolbar>
    )
  }
}

export default FlashcardButtons;
