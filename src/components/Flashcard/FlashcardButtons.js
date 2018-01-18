import React from 'react';
import classNames from 'classnames';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './FlashcardButtons.css';

const FlashcardButtons = ({previousCard, nextCard, sayWord,  currentCategory}) => {
  return(
    <ButtonToolbar className={classNames('button-toolbar', `btn-toolbar-${currentCategory}`)}>
      <Button bsStyle="default" bsSize="large" onClick={previousCard}>&#8592;</Button>
      <Button bsStyle="primary" bsSize="large" onClick={sayWord}>Say</Button>
      <Button bsStyle="default" bsSize="large" onClick={nextCard}>&#8594;</Button>
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
