import React from 'react';
import FlashcardButtons from './FlashcardButtons';
import ReactSwipe from 'react-swipe';
import classNames from 'classnames';

import './Flashcard.css';
import './FlashcardMobileDevice.css';

const FlashcardMobileDevice = ({currentWords, cardCategory, flipCard, flashcardClasses, setSwipedSlideIndex, flipped}) => {
  const reactSwipeContainerClasses = ['carousel', 'notecard', 'mobileSwipeContainer'];

  return (
    <div class="FlashcardMobileDevice">
      <ReactSwipe key={currentWords.length} className={classNames(reactSwipeContainerClasses, 'customBgImg', cardCategory)} swipeOptions={{continuous: true, callback: (index, el) => setSwipedSlideIndex(index,el)}}>
        {currentWords.map((currentCard, index) =>
          <div key={index} className={ classNames(flashcardClasses) } data-word={currentCard.word} onClick={flipCard}>
            <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
          </div>
        )}
      </ReactSwipe>
      <FlashcardButtons sayWord={this.sayWord} mobile={true} />
    </div>
  );
}

export default FlashcardMobileDevice;
