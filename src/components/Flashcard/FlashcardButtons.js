import React from 'react';
import classNames from 'classnames';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FlashcardButtons = ({previousCard, nextCard, sayWord, mobile}) => {
  return(
    <ButtonToolbar className='flex flex-justify-space-around full-width button-toolbar'>
      {previousCard && <Button bsStyle="primary" bsSize="large" onClick={previousCard}>Previous</Button>}
      <Button className={classNames({'flex-1-1-100': mobile})} bsStyle={mobile ? "primary" : "default"} bsSize="large" onClick={sayWord}>Say</Button>
      {nextCard && <Button bsStyle="primary" bsSize="large" onClick={nextCard}>Next</Button>}
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
