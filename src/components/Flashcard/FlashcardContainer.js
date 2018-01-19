import React, {Component} from 'react';
// word recognition for say button
import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import Flashcard from './Flashcard';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/helpers';
import vocabulary from '../../static/vocabulary';

import './FlashcardContainer.css';

class FlashcardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCardIndex: 0,
      flipped: false
    }
    const urls = props.location.pathname.split('/').slice(2)
    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[urls[0]][urls[1]];
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
    const {history} = this.props;
    const currentCard = this.currentWords[currentCardIndex];

    return (
      <div className="FlashcardContainer">
        <BreadcrumbMenu history={history} subPaths={history.location.pathname.split('/')} currentLocation={this.cardCategory} />
        <div className="FlashcardContent">
          <Flashcard cardCategory={this.cardCategory} flipCard={this.flipCard} flipped={flipped} language={this.props.language} currentCard={currentCard} />
          <FlashcardButtons previousCard={this.previousCard} currentCategory={this.cardCategory} sayWord={this.sayWord} nextCard={this.nextCard} />
        </div>
      </div>
    )
  }
}


export default FlashcardContainer;
