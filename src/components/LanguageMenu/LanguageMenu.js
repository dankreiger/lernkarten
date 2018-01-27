import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Grid, Row, Button, FormControl, FormGroup} from 'react-bootstrap';
import classNames from 'classnames';
import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import {formatLink, translateTopic, translateLabel} from '../../helpers/functions';
import './LanguageMenu.css';


class LanguageMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visibleRows: null,
      currentLanguage: props.location.pathname.slice(1),
      currentCardIndex: 0,
      flipped: false,
      playSound: false,
      spokenText: null
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
        <Row className='menuForm'>
          <FormGroup controlId="formControlsSelect">
            <FormControl className="categoryQuantitySelect" onChange={this.pickCategoryQuantity} value={this.state.visibleRows} inputRef={el => this.inputEl = el} componentClass="select">
              {categories.map((e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </FormControl>
            <Button onClick={this.toggleAllCategories} bsStyle='primary'>
              {translateLabel(currentLanguage, `show${this.state.visibleRows === this.categories.length.toString() ? 'One': 'All'}Btn`)}
            </Button>
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

    </div>)
  }
}

export default LanguageMenu;
