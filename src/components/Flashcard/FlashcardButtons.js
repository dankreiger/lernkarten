import React from 'react';
import classNames from 'classnames';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './FlashcardButtons.css';

const FlashcardButtons = ({wordQuantity, previousCard, nextCard, sayWord, slowSayWord, currentCategory}) => {
  return(
    <ButtonToolbar className={classNames('button-toolbar', `btn-toolbar-${currentCategory}`)}>
      {wordQuantity > 1 && <Button bsStyle="default" bsSize="large" onClick={previousCard}>&#8592;</Button>}
      <Button className={classNames({'oneCard': wordQuantity === 1})} bsStyle="primary" bsSize="large" onClick={sayWord}>Say</Button>
      <Button className={classNames({'oneCard': wordQuantity === 1})} bsStyle="warning" bsSize="large" onClick={slowSayWord}>Slow</Button>
      {wordQuantity > 1 && <Button bsStyle="default" bsSize="large" onClick={nextCard}>&#8594;</Button>}
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
