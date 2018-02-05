import React from 'react';
import classNames from 'classnames';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import QuizSounds from './../QuizSounds/QuizSounds';
import {formatQuizStr} from './../../helpers/functions'

const Flashcard = ({cardCategory, nextCard, flipCard, flipped, currentCard, spokenText, language, quizActive, quizInput}) => {
  // log final result comparison
  if(spokenText) {
    console.log(`You --> %c${formatQuizStr(spokenText)}`, 'background: #222; color: #bada55');
    console.log(`Flashcard --> ${formatQuizStr(currentCard.word)}`);
  }

  const correct = spokenText && formatQuizStr(spokenText) === formatQuizStr(!isNaN(spokenText) ? currentCard.translation : currentCard.word),
        incorrect = spokenText && !correct,
        flashcardClasses = ['Flashcard', {front: !flipped, back: flipped, Quiz: quizActive, correct, incorrect, default: !spokenText}];

  return(
    <div className={classNames('customBgImg', 'notecard', cardCategory.replace('/quiz', ''), flashcardClasses)} onClick={quizInput ? null : flipCard}>
      <p className={classNames(`lead ${language}Lead`, {typedQuiz: quizInput, longText: currentCard.word.length > 60})}>{quizInput ? currentCard.translation : flipped ? currentCard.translation : currentCard.word}</p>
      {quizInput &&
        <Form inline>
          <FormGroup controlId="formInlineName">
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>{' '}
          <Button bsStyle='success' type="submit">Submit</Button>
        </Form>
      }
      {quizActive && <QuizSounds correct={correct} incorrect={incorrect} nextCard={nextCard} />}
    </div>
  )
}

export default Flashcard;
