import React, {Component} from 'react';
// word recognition for say button
import Artyom from 'artyom.js';

// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from './../../ArtyomCommandsManager.js';



import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import Flashcard from './Flashcard';
import FlashcardButtons from './FlashcardButtons';
import { formatLink } from '../../static/helpers';

import './FlashcardContainer.css';

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

class FlashcardContainer extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      currentCardIndex: 0,
      flipped: false,
      artyomActive: false,
      artyomIsReading: false
    }

    this.artyom = new Artyom();
    this.slowArtyom = new Artyom();

    this.cardCategory = formatLink(props.location.pathname);
    this.currentWords = props.words[this.cardCategory.toLowerCase()];
    this.currentLocale = this.props.location.pathname.includes('russian') ? "ru-RU" : "de-DE";

    // Load some commands to Artyom using the commands manager
    let CommandsManager = new ArtyomCommandsManager(Jarvis);
    CommandsManager.loadCommands();
  }

  componentWillMount(){
    this.artyom.initialize({
        lang: this.currentLocale,
        soundex: true
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

  startAssistant = () => {
      let _this = this;

      console.log("Artyom succesfully started !");

      Jarvis.initialize({
          lang: "en-GB",
          debug: true,
          continuous: true,
          soundex: true,
          listen: true
      }).then(() => {
          // Display loaded commands in the console
          console.log(Jarvis.getAvailableCommands());

          Jarvis.say("Hello there, how are you?");

          _this.setState({
              artyomActive: true
          });
      }).catch((err) => {
          console.error("Oopsy daisy, this shouldn't happen !", err);
      });
  }

  stopAssistant = () => {
      let _this = this;

      Jarvis.fatality().then(() => {
          console.log("Jarvis has been succesfully stopped");

          _this.setState({
              artyomActive: false
          });

      }).catch((err) => {
          console.error("Oopsy daisy, this shouldn't happen neither!", err);

          _this.setState({
              artyomActive: false
          });
      });
  }

  speakText = () => {
      let _this = this;

      _this.setState({
          artyomIsReading: true
      });

      // Speak text with Artyom
      Jarvis.say( _this.state.textareaValue, {
          onEnd() {
              _this.setState({
                  artyomIsReading: false
              });
          }
      });
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
    const {currentCardIndex, flipped} = this.state;
    const currentCard = this.currentWords[currentCardIndex];
    return (
      <div className="FlashcardContainer">
        <BreadcrumbMenu history={this.props.history} currentLocation={this.cardCategory} />
        <div className="FlashcardContent">

          <input type="button" value="Start Artyom" disabled={this.state.artyomActive} onClick={this.startAssistant}/>
          <input type="button" value="Stop Artyom" disabled={!this.state.artyomActive} onClick={this.stopAssistant}/>

          <Flashcard cardCategory={this.cardCategory} flipCard={this.flipCard} flipped={flipped} language={this.props.language} currentCard={currentCard} />
          <FlashcardButtons wordQuantity={this.currentWords.length} previousCard={this.previousCard} currentCategory={this.cardCategory} sayWord={this.sayWord} slowSayWord={this.slowSayWord} nextCard={this.nextCard} />
        </div>
      </div>
    )
  }
}


export default FlashcardContainer;
