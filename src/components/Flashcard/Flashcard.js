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
  }

  flipCard() {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    const {currentCard, flipped} = this.state;
    const {history, location, words} = this.props;

    const subject = formatLink(location.pathname);
    const flashcardClasses = [
      'Flashcard', 'flex', 'flex-align-items-center', 'flex-columns', 'full-width',
      {'front': !flipped, 'back': flipped, 'flipped': flipped}
    ]

    return (
      <div>
        <BreadcrumbMenu history={history} currentLocation={subject} />
        <div className="flex flex-justify-center">
          <div
            className={ classNames(flashcardClasses) } onClick={this.flipCard}>
            <p className="lead">{flipped ? words[subject.toLowerCase()][currentCard].translation : words[subject.toLowerCase()][currentCard].word}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Flashcard;
