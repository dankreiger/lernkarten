import React from 'react';
import classNames from 'classnames';
import QuizSounds from './../QuizSounds/QuizSounds';


const Flashcard = ({cardCategory, nextCard, flipCard, flipped, currentCard, spokenText, language, quizActive}) => {
  const correct = spokenText && spokenText.toLowerCase() == currentCard.word.replace(/\?|!/, '').toLowerCase(),
        incorrect = spokenText && !correct,
        flashcardClasses = ['Flashcard', {front: !flipped, back: flipped, Quiz: quizActive, correct, incorrect, default: !spokenText}];


  if(quizActive){
    return(
      <div className={ classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses) } onClick={flipCard}>
        <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
        <QuizSounds correct={correct} incorrect={incorrect} nextCard={nextCard} />
      </div>
    )
  } else {
    return(
      <div className={ classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses) } onClick={flipCard}>
        <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
      </div>
    );
  }
}

export default Flashcard;
