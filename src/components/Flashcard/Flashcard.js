import React, {Component} from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import MediaQuery from 'react-responsive';


import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/helpers';

import './Flashcard.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCardIndex: 0,
      flipped: false
    }

    this.flipCard = this.flipCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);

    this.sayWord = this.sayWord.bind(this);
    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[this.cardCategory.toLowerCase()];
  }

  flipCard() {
    this.setState({flipped: !this.state.flipped})
  }

  nextCard() {
    let wordQuantity = this.currentWords.length - 1,
        nextCardNumber = this.state.currentCardIndex + 1;
      this.setState(
        {currentCardIndex: nextCardNumber > wordQuantity ? 0 : nextCardNumber, flipped: false}
      );
  }

  previousCard() {
    this.setState(
      {currentCardIndex: this.state.currentCardIndex === 0 ? this.currentWords.length - 1 : this.state.currentCardIndex - 1, flipped: false}
    );
  }

  sayWord = () => {
    let artyom = new Artyom();
    artyom.say(this.currentWords[this.state.currentCardIndex].word, {
      lang: this.props.location.pathname.includes('russian') ? "ru-RU" : "de-DE"
    });
  }

  sayWordMobile = () => {
    let artyom = new Artyom(),
        currentWord = document.querySelector('.react-swipeable-view-container div[aria-hidden="false"] p').innerText;

    artyom.say(currentWord, {
      lang: this.props.location.pathname.includes('russian') ? "ru-RU" : "de-DE"
    });
  }

  render() {

    const {currentCardIndex, flipped} = this.state;

    const flashcardClasses = ['Flashcard', 'notecard', 'flex', 'flex-justify-center', 'flex-align-items-center', 'flex-columns', 'full-width', {'front': !flipped, 'back': flipped}]
    const currentCard = this.currentWords[currentCardIndex];


    return (
      <div>
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <MediaQuery maxDeviceWidth={1223}>
          <SwipeableViews>
            {this.currentWords.map((currentCard, index) =>
              <div key={index} className={ classNames(flashcardClasses) } onClick={this.flipCard}>
                <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
              </div>
            )}
          </SwipeableViews>
          <FlashcardButtons sayWord={this.sayWordMobile} />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1224}>
          <div className={ classNames(flashcardClasses) } onClick={this.flipCard}>
            <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
          </div>
          <FlashcardButtons previousCard={this.previousCard} sayWord={this.sayWord} nextCard={this.nextCard} />
        </MediaQuery>
      </div>
    )
  }
}


export default Flashcard;
