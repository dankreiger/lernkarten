import React from 'react';
import classNames from 'classnames';

const Flashcard = ({cardCategory, flipCard, flipped, currentCard}) => {
  const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped}];
  const longWord = currentCard.word.length > 20 && currentCard.word.split(' ').length - 1 <= 1;

  return(
    <div className={ classNames('customBgImg', 'notecard', cardCategory, flashcardClasses) } onClick={flipCard}>
      <p className={ classNames('lead', {longWord}) }>{flipped ? currentCard.translation : currentCard.word}</p>
    </div>
  );
}

export default Flashcard;
