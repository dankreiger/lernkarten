import React from 'react';
import classNames from 'classnames';
import Sound from 'react-sound';

const Flashcard = ({cardCategory, nextCard, flipCard, flipped, currentCard, spokenText, language, quizActive}) => {
  const flashcardClasses = ['Flashcard', {front: !flipped, back: flipped, Quiz: quizActive, incorrect: spokenText !== null && spokenText !== currentCard.word.replace(/\?|!/, ''), correct: spokenText && spokenText === currentCard.word, default: spokenText === null }];
  if(quizActive){
    if(spokenText && spokenText.toLowerCase() == currentCard.word.replace(/\?|!/, '').toLowerCase()){
      setTimeout(nextCard, 900);
    }
    return(
      <div className={ classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses) } onClick={flipCard}>
        <p className={classNames(`lead ${language}Lead`, {longText: currentCard.word.length > 60})}>{flipped ? currentCard.translation : currentCard.word}</p>
        {spokenText && spokenText.toLowerCase() == currentCard.word.replace(/\?|!/, '').toLowerCase() &&
        <Sound
          url="/audio/correct.mp3"
          playStatus={Sound.status.PLAYING}
        />}
        {spokenText && spokenText.toLowerCase() != currentCard.word.replace(/\?|!/, '').toLowerCase() &&
        <Sound
          url="/audio/incorrect.mp3"
          playStatus={Sound.status.PLAYING}
        />}
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
