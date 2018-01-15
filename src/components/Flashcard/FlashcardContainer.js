import React, {Component} from 'react';
import classNames from 'classnames';

// word recognition for say button
import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/helpers';

import './FlashcardContainer.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCardIndex: 0,
      flipped: false
    }

    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[this.cardCategory.toLowerCase()];
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped})
  }

  nextCard = () => {
    let wordQuantity = this.currentWords.length - 1,
        nextCardNumber = this.state.currentCardIndex + 1;
      this.setState(
        {currentCardIndex: nextCardNumber > wordQuantity ? 0 : nextCardNumber, flipped: false}
      );
  }

  previousCard = () => {
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

  render() {
    const {currentCardIndex, flipped} = this.state;
    const flashcardClasses = ['Flashcard', {'front': !flipped, 'back': flipped}];
    const currentCard = this.currentWords[currentCardIndex];

    return (
      <div className="FlashcardContainer">
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <div className="FlashcardContent">
          <div className={ classNames('customBgImg', 'notecard', this.cardCategory, flashcardClasses) } onClick={this.flipCard}>
            <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
          </div>
          <FlashcardButtons previousCard={this.previousCard} sayWord={this.sayWord} nextCard={this.nextCard} />
        </div>
      </div>
    )
  }
}


export default Flashcard;
