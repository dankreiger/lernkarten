import React from 'react';
import classNames from 'classnames';

const Flashcard = ({cardCategory, flipCard, flipped, currentCard, language}) => {
  const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped}];
  const splitWord = currentCard.word.split(' ');
  const longWord = splitWord.length - 1 <= 1 && splitWord[1] && splitWord[1].length > 13;
  console.log(language)
  return(
    <div className={ classNames('customBgImg', 'notecard', cardCategory, flashcardClasses) } onClick={flipCard}>
      <p className={`lead ${language}Lead`}>{flipped ? currentCard.translation : currentCard.word}</p>
    </div>
  );
}

export default Flashcard;
