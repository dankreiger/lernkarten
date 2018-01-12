import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FlashcardButtons = ({nextCard, sayWord}) => {
  return(
    <ButtonToolbar className='flex flex-justify-space-around padding-top-single'>
      <Button bsStyle="primary" bsSize="large" onClick={sayWord}>Say</Button>
      <Button bsSize="large" onClick={nextCard}>Next</Button>
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
