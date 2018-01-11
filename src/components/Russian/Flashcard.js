import React, {Component} from 'react';
import vocabulary from './static/vocabulary';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      vocabulary: vocabulary[this.props.match.params.topicId],
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
