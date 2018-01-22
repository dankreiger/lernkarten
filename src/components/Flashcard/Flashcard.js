import React from 'react';
import classNames from 'classnames';

const Flashcard = ({cardCategory, flipCard, flipped, currentCard, language}) => {
  const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped}];

  return(
    <div className={ classNames('customBgImg', 'notecard', cardCategory, flashcardClasses) } onClick={flipCard}>
      <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
    </div>
  );
}

export default Flashcard;
