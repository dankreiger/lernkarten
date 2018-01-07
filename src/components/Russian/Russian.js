import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';
import Flashcard from './Flashcard';


const sites = ['Greetings'];

const Russian = ({ match }) => (
  <Grid>
    <Row className='flex flex-justify-center'>
      <Col>
        <h2>русский</h2>
      </Col>
    </Row>
    {sites.map(site => {
      let topic = site.replace(/ /g,"_").toLowerCase();
      return(
        <Row>
          <Col sm={12} md={12}>
            <Link key={topic} to={`${match.url}/${topic}`} activeClassName="selected">
              {site}
            </Link>
          </Col>
        </Row>
      )
    }
    )}
    <Route path={`${match.url}/:topicId`} component={Flashcard} />
  </Grid>
)

export default Russian;
