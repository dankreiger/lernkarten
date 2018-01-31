import React from 'react';
import classNames from 'classnames';
import QuizSounds from './../QuizSounds/QuizSounds';

const Flashcard = ({guessCount, flashcardClasses, correct, incorrect, cardCategory, nextCard, flipCard, flipped, currentCard, language, quizActive}) => {

  return(
    <div className={classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses)} onClick={flipCard}>
      <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
    {quizActive && <QuizSounds guessCount={guessCount} correct={correct} incorrect={incorrect} nextCard={nextCard} />}
    </div>
  )
}

export default Flashcard;
