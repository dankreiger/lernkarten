import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './FlashcardButtons.css';

const FlashcardButtons = ({previousCard, nextCard, sayWord, mobile}) => {
  return(
    <ButtonToolbar className='button-toolbar'>
      {previousCard && <Button bsStyle="primary" bsSize="large" onClick={previousCard}>Previous</Button>}
      <Button bsStyle={mobile ? "primary" : "default"} bsSize="large" onClick={sayWord}>Say</Button>
      {nextCard && <Button bsStyle="primary" bsSize="large" onClick={nextCard}>Next</Button>}
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
