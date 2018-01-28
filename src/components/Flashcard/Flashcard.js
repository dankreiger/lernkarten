import React from 'react';
import classNames from 'classnames';
import QuizSounds from './../QuizSounds/QuizSounds';


const Flashcard = ({cardCategory, nextCard, flipCard, flipped, currentCard, spokenText, language, quizActive}) => {
  // if(spokenText) console.log(spokenText.toLowerCase(), currentCard.word.replace(/\?|!|,|\.|/, '').replace(/ß/, 'ss').toLowerCase())
  const correct = spokenText && spokenText.replace(/\?|!|,|\.|\(|\)/ig, '').toLowerCase() === currentCard.word.replace(/\?|!|,|\.|\(|\)/ig, '').replace(/ß/ig, 'ss').toLowerCase(),
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
