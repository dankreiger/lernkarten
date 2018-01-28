import React from 'react';
import classNames from 'classnames';
import QuizSounds from './../QuizSounds/QuizSounds';
import {formatQuizStr} from './../../helpers/functions'

const Flashcard = ({cardCategory, nextCard, flipCard, flipped, currentCard, spokenText, language, quizActive}) => {
  // log final result comparison
  if(spokenText) {
    console.log(`You --> %c${formatQuizStr(spokenText)}`, 'background: #222; color: #bada55');
    console.log(`Flashcard --> ${formatQuizStr(currentCard.word)}`);
  }
  
  const correct = spokenText && formatQuizStr(spokenText) === formatQuizStr(currentCard.word),
        incorrect = spokenText && !correct,
        flashcardClasses = ['Flashcard', {front: !flipped, back: flipped, Quiz: quizActive, correct, incorrect, default: !spokenText}];

  return(
    <div className={classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses)} onClick={flipCard}>
      <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
      {quizActive && <QuizSounds correct={correct} incorrect={incorrect} nextCard={nextCard} />}
    </div>
  )
}

export default Flashcard;
