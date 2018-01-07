import React from 'react';
import { Link, Route } from 'react-router-dom'
import Flashcard from './Flashcard';

// bootstrap components
import { Grid, Row, Col } from 'react-bootstrap';

const German = ({ match }) => (
  <Grid>
    <Row className='flex flex-justify-center'>
      <Col>
        <h2>Deutsch</h2>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={12}>
        <Link to={`${match.url}/exampleTopicId`} id={50}>
          Example topic
        </Link>
        <Route path={`${match.url}/:topicId`} component={Flashcard} />
      </Col>
    </Row>
  </Grid>
)

export default German;
