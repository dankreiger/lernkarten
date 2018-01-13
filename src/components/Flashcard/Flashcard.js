import React, {Component} from 'react';
import classNames from 'classnames';
import ReactSwipe from 'react-swipe';
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

  setSwipedSlideIndex = (index, el) => {
    this.setState({currentCardIndex: index, flipped: false});
  }

  render() {
    const {currentCardIndex, flipped} = this.state;
    const flashcardClasses = ['Flashcard', 'flex', 'flex-justify-center', 'flex-align-items-center', 'flex-columns', 'flex-grow-1', 'full-width', {'front': !flipped, 'back': flipped}];
    const reactSwipeContainerClasses = ['carousel', 'notecard', 'mobileSwipeContainer', 'flex', 'flex-container-grow-vertical', 'flex-justify-center'];
    const currentCard = this.currentWords[currentCardIndex];

    return (
      <div className="FlashcardContainer flex flex-container-grow-vertical">
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <MediaQuery maxDeviceWidth={1223}>
          <ReactSwipe key={this.currentWords.length} className={classNames(reactSwipeContainerClasses, 'customBgImg', this.cardCategory)} swipeOptions={{continuous: true, callback: (index, el) => this.setSwipedSlideIndex(index,el)}}>
            {this.currentWords.map((currentCard, index) =>
              <div key={index} className={ classNames(flashcardClasses) } data-word={currentCard.word} onClick={this.flipCard}>
                <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
              </div>
            )}
          </ReactSwipe>
          <FlashcardButtons sayWord={this.sayWord} mobile={true} />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1224}>
          <div className={ classNames('customBgImg', 'notecard', this.cardCategory, flashcardClasses) } onClick={this.flipCard}>
            <p className="lead">{flipped ? currentCard.translation : currentCard.word}</p>
          </div>
          <FlashcardButtons previousCard={this.previousCard} sayWord={this.sayWord} nextCard={this.nextCard} />
        </MediaQuery>
      </div>
    )
  }
}


export default Flashcard;
