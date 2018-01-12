import React, {Component} from 'react';
import './Flashcard.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      vocabulary: props.words,
      currentCard: 0
    }
  }

  render() {
    const {vocabulary, currentCard} = this.state;

    return (
      <div className='Flashcard'>
        {vocabulary[currentCard].word}
      </div>
    )
  }
}


export default Flashcard;
