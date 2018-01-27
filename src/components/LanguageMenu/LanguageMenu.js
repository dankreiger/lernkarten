import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Grid, Row, Button, FormControl, FormGroup} from 'react-bootstrap';
import classNames from 'classnames';
import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import {formatLink, translateTopic, translateLabel} from '../../helpers/functions';
//
// import Artyom from 'artyom.js';
// import Sound from 'react-sound';

// Import the previously created class to handle the commands from another file
// import ArtyomCommandsManager from './../../helpers/ArtyomCommandsManager.js';

import './LanguageMenu.css';

// const Jarvis = new Artyom();

class LanguageMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visibleRows: null,
      currentLanguage: props.location.pathname.slice(1),
      currentCardIndex: 0,
      flipped: false,
      // artyomActive: false,
      // artyomIsReading: false,
      playSound: false,
      spokenText: null
    };
    this.categories = Object.entries(vocabulary[props.location.pathname.slice(1)]);
    //
    // this.artyom = new Artyom();
    // this.slowArtyom = new Artyom();

    this.currentLocale = this.props.location.pathname.includes('russian')
      ? "ru-RU"
      : "de-DE";


    // props.history.listen( location =>  {
    //    this.stopAssistant();
    //    this.setState({spokenText: null})
    // });

    // Load some commands to Artyom using the commands manager
    // let CommandsManager = new ArtyomCommandsManager(Jarvis);
    // CommandsManager.loadCommands();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname.slice(1) !== this.state.currentLanguage) {
      this.setDefaults(nextProps.location.pathname.slice(1));
    }
  }

  componentWillMount() {
    this.setState({
      visibleRows: localStorage.getItem('visibleRows') || '1'
    });
    if (localStorage.getItem('currentLanguage') !== this.state.currentLanguage) {
      this.setDefaults(this.state.currentLanguage);
    }

  }

  // componentWillUnmount() {
  //   this.stopAssistant()
  //   this.setState({spokenText: null})
  //
  // }


  // startAssistant = () => {
  //   let _this = this;
  //   let currentLocale = this.state.currentLanguage === "russian" ? "ru-RU" : "de-DE";
  //
  //   console.log("Artyom succesfully started !");
  //
  //   Jarvis.initialize({lang: currentLocale, debug: true, continuous: true, soundex: true, listen: true}).then(() => {
  //     // Display loaded commands in the console
  //     console.log(Jarvis.getAvailableCommands());
  //     console.log(_this.currentLocale, this.props.history.location, this.state.currentLanguage)
  //     // Jarvis.say(this.state.currentLanguage === "russian" ? "привет" : "Was geht alta?");
  //     _this.setState({artyomActive: true});
  //
  //
  //   }).catch((err) => {
  //     console.error("Oopsy daisy, this shouldn't happen !", err);
  //   });
  //
  //   Jarvis.redirectRecognizedTextOutput(function(recognized,isFinal){
  //       if(isFinal){
  //           console.log("Final recognized text: " + recognized);
  //           _this.setState({spokenText: recognized})
  //       }else{
  //           console.log(recognized);
  //       }
  //   });
  // }
  //
  // stopAssistant = () => {
  //   let _this = this;
  //
  //   Jarvis.fatality().then(() => {
  //     console.log("Jarvis has been succesfully stopped");
  //
  //     _this.setState({artyomActive: false});
  //
  //   }).catch((err) => {
  //     console.error("Oopsy daisy, this shouldn't happen neither!", err);
  //
  //     _this.setState({artyomActive: false});
  //   });
  // }

  setDefaults = (currentLanguage) => {
    this.setState({visibleRows: 1, currentLanguage: currentLanguage});
    localStorage.setItem('visibleRows', '1');
    localStorage.setItem('currentLanguage', currentLanguage);
  }

  pickCategoryQuantity = () => {
    this.setState({visibleRows: this.inputEl.value});
    localStorage.setItem('visibleRows', this.inputEl.value);
  }

  toggleAllCategories = () => {
    if (this.categories.length.toString() === this.state.visibleRows) {
      this.setState({visibleRows: '1'});
      localStorage.setItem('visibleRows', '1');
    } else {
      this.setState({visibleRows: this.categories.length.toString()});
      localStorage.setItem('visibleRows', this.categories.length.toString());
    }
  }

  render() {
    const {history, location} = this.props,
          {
            currentLanguage,
            spokenText,
            // playSound
          } = this.state,
      categories = Object.entries(vocabulary[currentLanguage]);

    return (<div className={classNames('LanguageMenu', {'goodnight': new RegExp('спокойной ночи', 'i').exec(spokenText)})}>
      <BreadcrumbMenu history={history} currentLocation={formatLink(location.pathname)}/>
      <Grid className={classNames('languageMenuList', `${currentLanguage}MenuList`)}>
        {
          spokenText && spokenText !== 'bitte' &&
          <Row><p className='lead spoken'>{spokenText}</p></Row>
        }
        <Row className='menuForm'>
          <FormGroup controlId="formControlsSelect">
            <FormControl className="categoryQuantitySelect" onChange={this.pickCategoryQuantity} value={this.state.visibleRows} inputRef={el => this.inputEl = el} componentClass="select">
              {categories.map((e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </FormControl>
            <Button onClick={this.toggleAllCategories} bsStyle='primary'>
              {translateLabel(currentLanguage, `show${this.state.visibleRows === this.categories.length.toString() ? 'One': 'All'}Btn`)}
            </Button>
            {/* <Button bsStyle={this.state.artyomActive ? 'danger' : 'success'} onClick={this.state.artyomActive ? this.stopAssistant : this.startAssistant}>
              {this.state.artyomActive ? 'Stop' : 'Start'}
            </Button> */}
          </FormGroup>
        </Row>
        <Row className='menuListIndex'>
          {
            categories.map(([topic, words], i) => {
              return (<div className={classNames(`menuLinkRow-${i + 1}`, {
                  showMenuLinkRow: i + 1 <= this.state.visibleRows
                })} key={topic}>
                <Link className={classNames('menuLink', `${currentLanguage}MenuLink`)} to={`${currentLanguage}/${topic}`}>{translateTopic(currentLanguage, topic)}</Link>
              </div>)
            })
          }
        </Row>
      </Grid>

      {/* {playSound &&
        <div>
          <Sound
            url="audio/success.mp3"
            playStatus={Sound.status.PLAYING}
          />
        </div>
      } */}

    </div>)
  }
}

export default LanguageMenu;
