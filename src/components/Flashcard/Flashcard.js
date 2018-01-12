import React, {Component} from 'react';
import classNames from 'classnames';
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
    const {words} = this.props;

    return (
      <div className={ classNames('Flashcard', {'front': !flipped, 'back': flipped, 'flipped': flipped}) } onClick={this.flipCard}>
        <p className="lead">{flipped ? words[currentCard].translation : words[currentCard].word}</p>
      </div>
    )
  }
}


export default Flashcard;
