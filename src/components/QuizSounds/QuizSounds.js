import React from 'react';
import Sound from 'react-sound';

import correctSound from '../../static/audio/correct.mp3'
import incorrectSound from '../../static/audio/incorrect.mp3'

const QuizSounds = ({guessCount, correct, incorrect, nextCard}) => {
  const correctAudio = document.getElementById('correct'),
        incorrectAudio = document.getElementById('incorrect');


  if(correct){
    setTimeout(nextCard, 900);
    correctAudio.play();

  }

  else if(incorrect){
    incorrectAudio.play();
  }


  return(
    <div>
      <audio id='correct'>
        <source src={correctSound} type="audio/mpeg"/>
      </audio>
      <audio id='incorrect'>
        <source src={incorrectSound} type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default QuizSounds;


{/* <Sound
  url="/audio/correct.mp3"
  playStatus={Sound.status.PLAYING}
  onFinishedPlaying={() => setTimeout(nextCard, 900)}
/> */}
