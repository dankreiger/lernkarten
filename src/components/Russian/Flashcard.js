import React, {Component} from 'react';

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

    console.log(vocabulary)

    return (
      <div className='Flashcard'>
        {vocabulary[currentCard].word}
      </div>
    )
  }
}


export default Flashcard;
