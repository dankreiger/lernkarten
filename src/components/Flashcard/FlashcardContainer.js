import React, {Component} from 'react';
// word recognition for say button
import Artyom from 'artyom.js';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import Flashcard from './Flashcard';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../helpers/functions';
import { initializeArtyomInstance, initializeArtyomSlowInstance } from '../../helpers/ArtyomFunctions';
import ArtyomCommandsManager from '../../helpers/ArtyomCommandsManager';

import './FlashcardContainer.css';

const Jarvis = new Artyom();

class FlashcardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCardIndex: 0,
      flipped: false,
      artyomActive: false,
      artyomIsReading: false,
      quizActive: false,
      playSound: false,
      spokenText: null
    }

    this.artyom = new Artyom();
    this.slowArtyom = new Artyom();

    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[props.location.pathname.includes('quiz') ? this.cardCategory.split('/')[0].toLowerCase() : this.cardCategory.toLowerCase()];
    this.currentLocale = props.location.pathname.includes('russian') ? "ru-RU" : "de-DE";
    this.quizActive = props.location.pathname.includes('quiz');

    props.history.listen( location =>  {
      this.stopQuiz();
      this.quizActive = location.pathname.includes('quiz');
    });

    let CommandsManager = new ArtyomCommandsManager(Jarvis);
    CommandsManager.loadCommands();
  }

  componentWillMount(){
    initializeArtyomInstance(this.artyom, this.currentLocale);
    initializeArtyomSlowInstance(this.slowArtyom, this.currentLocale);
  }

  // confirm that this is necessary
  componentWillUnmount(){
    this.artyom = null;
    this.slowArtyom = null;
    this.stopQuiz();
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped})
  }

  nextCard = () => {
    let wordQuantity = this.currentWords.length - 1, nextCardNumber = this.state.currentCardIndex + 1;
    this.setState(
      {currentCardIndex: nextCardNumber > wordQuantity ? 0 : nextCardNumber, flipped: false}
    );
    if(this.quizActive){
      this.setState({spokenText: null})
    }
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

  startQuiz = () => {
    let _this = this;
    // let currentLocale = this.state.currentLanguage === "russian" ? "ru-RU" : "de-DE";
    console.log("Artyom succesfully started !");

    Jarvis.initialize({lang: _this.currentLocale, debug: true, continuous: true, soundex: true, listen: true}).then(() => {
      // Display loaded commands in the console
      console.log(Jarvis.getAvailableCommands());
      // console.log(_this.currentLocale, this.props.history.location, this.state.currentLanguage)
      // Jarvis.say(this.state.currentLanguage === "russian" ? "привет" : "Was geht alta?");
      _this.setState({artyomActive: true});

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });

    Jarvis.redirectRecognizedTextOutput(function(recognized,isFinal){
      if (isFinal) {
        console.log("Final recognized text: " + recognized);
        _this.setState({spokenText: recognized})
      } else{
        console.log(recognized);
      }
    });
  }

  stopQuiz = () => {
    let _this = this;

    Jarvis.fatality().then(() => {
      console.log("Jarvis has been succesfully stopped");
      _this.setState({artyomActive: false, spokenText: null});

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);
      _this.setState({artyomActive: false, spokenText: null});
    });
  }

  render() {
    const {currentCardIndex, flipped, spokenText} = this.state,
          currentCard = this.currentWords[currentCardIndex];

    // if(spokenText && spokenText.trim() === currentCard.word.replace(/\?|!/, '')) {
    //   setTimeout(() => this.nextCard, 1500);
    // }
    return (
      <div className="FlashcardContainer" ref="FlashcardContainer">
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <div className="FlashcardContent">
          <Flashcard quizActive={this.quizActive} spokenText={spokenText && spokenText.trim()} nextCard={this.nextCard} cardCategory={this.cardCategory} flipCard={this.flipCard} flipped={flipped} language={this.props.language} currentCard={currentCard} />
          <FlashcardButtons wordQuantity={this.currentWords.length} previousCard={this.previousCard} currentCategory={this.cardCategory} sayWord={this.sayWord} slowSayWord={this.slowSayWord} nextCard={this.nextCard} quizActive={this.quizActive} artyomActive={this.state.artyomActive} startQuiz={this.startQuiz} stopQuiz={this.stopQuiz} />
        </div>
      </div>
    )
  }
}


export default FlashcardContainer;
