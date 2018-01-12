import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FlashcardButtons = ({mobileDeviceWidth, previousCard, nextCard, sayWord}) => {
  console.log(mobileDeviceWidth)
  return(
    <ButtonToolbar className='flex flex-justify-space-around padding-top-single'>
      {!mobileDeviceWidth && <Button bsStyle="primary" bsSize="large" onClick={previousCard}>Previous</Button>}
      <Button bsSize="large" onClick={sayWord}>Say</Button>
      {!mobileDeviceWidth && <Button bsStyle="primary" bsSize="large" onClick={nextCard}>Next</Button>}
    </ButtonToolbar>
  )
}

export default FlashcardButtons;
