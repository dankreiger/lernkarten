import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Grid, Row, Col, Button, FormControl, FormGroup} from 'react-bootstrap';
import classNames from 'classnames';
import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import {formatLink, translateTopic, translateLabel} from '../../helpers/functions';
import './LanguageMenu.css';



// PLEASE CLEAN UP THIS LAYOUT IF YOU CONTINUE ON THIS BRANCH
class LanguageMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visibleRows: null,
      currentLanguage: props.location.pathname.slice(1),
      currentCardIndex: 0,
      flipped: false,
      playSound: false,
      spokenText: null,
      inputValue: ''
    };
    this.categories = Object.entries(vocabulary[props.location.pathname.slice(1)]);


    this.currentLocale = this.props.location.pathname.includes('russian')
      ? "ru-RU"
      : "de-DE";

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

  handleInputChange = e => {
    this.setState({inputValue: e.target.value})
  }

  submitVerb = () => {
    console.log(this.state.inputValue)
  }

  render() {
    const {history, location} = this.props,
          {
            currentLanguage,
            spokenText,
          } = this.state,
      categories = Object.entries(vocabulary[currentLanguage]);

    return (<div className={classNames('LanguageMenu', {'goodnight': new RegExp('спокойной ночи', 'i').exec(spokenText)})}>
      <BreadcrumbMenu history={history} currentLocation={formatLink(location.pathname)}/>
      <Grid className={classNames('languageMenuList', `${currentLanguage}MenuList`)}>
        {
          spokenText && spokenText !== 'bitte' &&
          <Row><p className='lead spoken'>{spokenText}</p></Row>
        }
        <FormGroup controlId="inputControlsSelect">
          <Row className='verbConjugatorForm'>
            <Col xs={12} sm={7} className='col-sm-offset-2'>
              <FormControl className="categoryQuantitySelect" onChange={this.handleInputChange} value={this.state.inputValue} componentClass="input"></FormControl>
            </Col>
            <Col xs={12} sm={3} className='text-left'>
              <Button onClick={this.submitVerb} bsStyle='default'><span role='img'>&#128269;</span></Button>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <Row className='menuForm'>
            <FormControl className="categoryQuantitySelect" onChange={this.pickCategoryQuantity} value={this.state.visibleRows} inputRef={el => this.inputEl = el} componentClass="select">
              {categories.map((e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </FormControl>
            <Button onClick={this.toggleAllCategories} bsStyle='primary'>
              {translateLabel(currentLanguage, `show${this.state.visibleRows === this.categories.length.toString() ? 'One': 'All'}Btn`)}
            </Button>
          </Row>
        </FormGroup>
        <div className='menuListIndexGroup'>
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
        </div>
      </Grid>

    </div>)
  }
}

export default LanguageMenu;
