import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import './QuizMenu.css';

const QuizMenu = () => {
  return(
    <div className="QuizMenu">
      <Row className='quizLinkRow'>
        <Col xs={12} sm={6}>
          <Link className='quizLink' to='quiz/german'>Quiz</Link>
        </Col>
        <Col xs={12} sm={6}>
          <Link className='quizLink' to='quiz/russian'>викторина</Link>
        </Col>
      </Row>
    </div>
  )
}


export default QuizMenu;
