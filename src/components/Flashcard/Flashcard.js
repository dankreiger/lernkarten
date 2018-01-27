import React from 'react';
import classNames from 'classnames';

const Flashcard = ({cardCategory, flipCard, flipped, currentCard, language, quizActive}) => {
  const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped, 'Quiz': quizActive}];

  return(
    <div className={ classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses) } onClick={flipCard}>
      <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
    </div>
  );
}

export default Flashcard;
