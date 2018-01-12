import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FlashcardButtons = ({previousCard, nextCard, sayWord}) => {
  return(
    <ButtonToolbar className='flex flex-justify-space-around padding-top-single'>
      {previousCard && <Button bsStyle="primary" bsSize="large" onClick={previousCard}>Previous</Button>}
      <Button bsSize="large" onClick={sayWord}>Say</Button>
      {nextCard && <Button bsStyle="primary" bsSize="large" onClick={nextCard}>Next</Button>}
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
