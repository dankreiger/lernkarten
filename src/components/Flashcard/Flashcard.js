import React from 'react';
import classNames from 'classnames';
import ReactFitText from 'react-fittext';

const Flashcard = ({cardCategory, flipCard, flipped, currentCard}) => {
  const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped}];

  return(
    <div className={ classNames('customBgImg', 'notecard', cardCategory, flashcardClasses) } onClick={flipCard}>
      <ReactFitText>
        <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
      </ReactFitText>
    </div>
  );
}

export default Flashcard;
