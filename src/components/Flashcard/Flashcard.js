import React, {Component} from 'react';
import classNames from 'classnames';
import './Flashcard.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      vocabulary: props.words,
      currentCard: 0,
      flipped: false
    }

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    const {vocabulary, currentCard, flipped} = this.state;
    return (
      <div className={ classNames('Flashcard', {'front': !flipped, 'back': flipped, 'flipped': flipped}) } onClick={this.flipCard}>
        <p className="lead">{flipped ? vocabulary[currentCard].translation : vocabulary[currentCard].word}</p>
      </div>
    )
  }
}


export default Flashcard;
