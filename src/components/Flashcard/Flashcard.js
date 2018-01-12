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
    this.setState({flipped: !this.state.flipCard})
  }

  render() {
    const {vocabulary, currentCard, flipped} = this.state;

    return (
      <div className={classNames('Flashcard', {'front': !flipped, 'back': flipped, 'flipped': flipped})} onClick={this.flipCard}>
        {/* <p class="lead">{if(flipped) ?  : {vocabulary[currentCard].word}}</p> */}
      </div>
    )
  }
}


export default Flashcard;
