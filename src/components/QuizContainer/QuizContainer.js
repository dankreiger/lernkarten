import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Artyom from 'artyom.js';
import Sound from 'react-sound';
import {formatLink, translateTopic, translateLabel} from '../../helpers/functions';

// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from './../../helpers/ArtyomCommandsManager.js';

import vocabulary from '../../static/vocabulary';

const Jarvis = new Artyom();

class QuizContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      artyomActive: false,
      artyomIsReading: false,
      currentLanguage: props.location.pathname.slice(6),
      currentWord: 'Спасибо',
      spokenText: null,
      quizActive: false,
    };

    this.categories = Object.entries(vocabulary[props.location.pathname.slice(6)]);

    this.artyom = new Artyom();
    this.slowArtyom = new Artyom();

    props.history.listen( location =>  {
       this.stopAssistant();
       this.setState({spokenText: null})
    });

    // Load some commands to Artyom using the commands manager
    let CommandsManager = new ArtyomCommandsManager(Jarvis);
    CommandsManager.loadCommands();
  }

  componentWillUnmount() {
    this.stopAssistant()
    this.setState({spokenText: null})
  }


  startAssistant = () => {
    let _this = this;
    let currentLocale = this.state.currentLanguage === "russian" ? "ru-RU" : "de-DE";

    console.log("Artyom succesfully started !");

    Jarvis.initialize({lang: currentLocale, debug: true, continuous: true, soundex: true, listen: true}).then(() => {
      // Display loaded commands in the console
      console.log(Jarvis.getAvailableCommands());
      // Jarvis.say(this.state.currentLanguage === "russian" ? "привет" : "Was geht alta?");
      _this.setState({artyomActive: true, quizActive: true});


    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });

    Jarvis.redirectRecognizedTextOutput(function(recognized,isFinal){
        if(isFinal){
            console.log("Final recognized text: " + recognized);
            _this.setState({spokenText: recognized.trim()})
        }else{
            console.log(recognized);
        }
    });
  }


  stopAssistant = () => {
    let _this = this;

    Jarvis.fatality().then(() => {
      console.log("Jarvis has been succesfully stopped");

      _this.setState({artyomActive: false, quizActive: false});

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);

      _this.setState({artyomActive: false});
    });
  }

  render(){
    console.log(this.categories)
    const { currentLanguage, quizActive, spokenText } = this.state;

    return(
      <div className="QuizContainer">
        <Grid>
          <Row>
            <Col>
              <p className='lead'>{spokenText}</p>
            </Col>
          </Row>
          <Row>
            {
              this.categories.map(([topic, words], i) => {
                return (
                  <div className={`menuLinkRow-${i + 1}`} key={topic}>
                    <Link to={`${currentLanguage}/${topic}`}>{translateTopic(currentLanguage, topic)}</Link>
                  </div>)
              })
            }
          </Row>
          <Row>
            <Col>
              <Button bsStyle={quizActive ? 'danger' : 'success'} onClick={quizActive ? this.stopAssistant : this.startAssistant}>{quizActive ? 'Stop' : 'Start'} Quiz</Button>
            </Col>
          </Row>
        </Grid>

        {this.state.currentWord === spokenText &&
          <div>
            <Sound
              url="/audio/success.mp3"
              playStatus={Sound.status.PLAYING}
            />
          </div>
        }
      </div>
    )
  }
}

export default QuizContainer;
