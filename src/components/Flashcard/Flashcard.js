import React, {Component} from 'react';
import classNames from 'classnames';
import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import { formatLink } from '../../static/links';

import './Flashcard.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCard: 0,
      flipped: false
    }

    this.flipCard = this.flipCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  flipCard() {
    this.setState({flipped: !this.state.flipped})
  }

  nextCard() {
    let wordQuantity = this.props.words[formatLink(this.props.location.pathname).toLowerCase()].length - 1,
        nextCardNumber = this.state.currentCard + 1;

    if(nextCardNumber > wordQuantity) {
      this.setState({currentCard: 0});
    } else {
      this.setState({currentCard: nextCardNumber});
    }
  }

  render() {
    const {currentCard, flipped} = this.state;
    const {history, location, words} = this.props;

    const subject = formatLink(location.pathname);
    const flashcardClasses = [
      'Flashcard', 'flex', 'flex-justify-center', 'flex-align-items-center', 'flex-columns', 'full-width',
      {'front': !flipped, 'back': flipped, 'flipped': flipped}
    ]

    return (
      <div>
        <BreadcrumbMenu history={history} currentLocation={subject} />
          <div
            className={ classNames(flashcardClasses) } onClick={this.flipCard}>
            <p className="lead">{flipped ? words[subject.toLowerCase()][currentCard].translation : words[subject.toLowerCase()][currentCard].word}</p>
          </div>
        <button onClick={this.nextCard}>Next</button>
      </div>
    )
  }
}


export default Flashcard;
