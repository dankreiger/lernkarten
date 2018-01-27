import React from 'react';
import Sound from 'react-sound';

const QuizSounds = ({correct, incorrect, nextCard}) => {
  if(correct){
    return(
      <Sound
        url="/audio/correct.mp3"
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying={() => setTimeout(nextCard, 900)}
      />
    )
  } else if(incorrect){
    return(
      <Sound
        url="/audio/incorrect.mp3"
        playStatus={Sound.status.PLAYING}
      />
    )
  } else {
    return null
  }
}

export default QuizSounds;
