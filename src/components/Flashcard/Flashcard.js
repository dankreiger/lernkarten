import React, {Component} from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/links';

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

  render() {

    const {currentCardIndex, flipped} = this.state;

    const flashcardClasses = ['Flashcard', 'flex', 'flex-justify-center', 'flex-align-items-center', 'flex-columns', 'full-width', {'front': !flipped, 'back': flipped, 'flipped': flipped}]
    const currentCard = this.currentWords[currentCardIndex];

    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        background: '#FEA900',
      },
      slide2: {
        background: '#B3DC4A',
      },
      slide3: {
        background: '#6AC0FF',
      },
    };

    return (
      <div>
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <SwipeableViews>
          {this.currentWords.map((word) => {
            return(
              <div className={ classNames(flashcardClasses) } onClick={this.flipCard}>
                <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
              </div>
            )
          }}
        </SwipeableViews>
        <div className={ classNames(flashcardClasses) } onClick={this.flipCard}>
          <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
        </div>
        <FlashcardButtons previousCard={this.previousCard} sayWord={this.sayWord} nextCard={this.nextCard} />
      </div>
    )
  }
}


export default Flashcard;
