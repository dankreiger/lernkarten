import React, {Component} from 'react';
// word recognition for say button
import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import Flashcard from './Flashcard';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/helpers';

import './FlashcardContainer.css';

class FlashcardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCardIndex: 0,
      flipped: false,
      quizActive: false
    }

    this.artyom = new Artyom();
    this.slowArtyom = new Artyom();

    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[props.location.pathname.includes('quiz') ? this.cardCategory.split('/')[0].toLowerCase() : this.cardCategory.toLowerCase()];
    props.history.listen( location =>  {
      this.currentLocale = props.location.pathname.includes('russian') ? "ru-RU" : "de-DE";
      this.setState({quizActive: location.pathname.includes('quiz')})
    });
  }

  componentWillMount(){
    this.artyom.initialize({
        lang: this.currentLocale,
        soundex: true,
    }).then(() => console.log("Artyom has been succesfully initialized"))
      .catch(err => console.error("Artyom couldn't be initialized: ", err));
    this.slowArtyom.initialize({
        lang: this.currentLocale,
        soundex: true,
        speed: 0.25,
        mode: "slow"
    }).then(() => console.log("Slow Artyom has been succesfully initialized"))
      .catch(err => console.error("Slow Artyom couldn't be initialized: ", err));
  }


  flipCard = () => {
    this.setState({flipped: !this.state.flipped})
  }

  nextCard = () => {
    let wordQuantity = this.currentWords.length - 1, nextCardNumber = this.state.currentCardIndex + 1;
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
    this.artyom.say(this.currentWords[this.state.currentCardIndex].word)
  }
  slowSayWord = () => {
    this.slowArtyom.say(this.currentWords[this.state.currentCardIndex].word)
  }

  render() {
    const {currentCardIndex, flipped, quizActive} = this.state;
    const currentCard = this.currentWords[currentCardIndex];
    return (
      <div className="FlashcardContainer">
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <div className="FlashcardContent">
          <Flashcard cardCategory={this.cardCategory} flipCard={this.flipCard} flipped={flipped} language={this.props.language} currentCard={currentCard} />
          {!quizActive && <FlashcardButtons wordQuantity={this.currentWords.length} previousCard={this.previousCard} currentCategory={this.cardCategory} sayWord={this.sayWord} slowSayWord={this.slowSayWord} nextCard={this.nextCard} />}
          {quizActive && '&#9836;'}
        </div>
      </div>
    )
  }
}


export default FlashcardContainer;
