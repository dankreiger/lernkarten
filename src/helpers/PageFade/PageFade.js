import React from 'react';

// react-transition-group (page transitions)
import { CSSTransition } from 'react-transition-group'

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
)

export default PageFade;
