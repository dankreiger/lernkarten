import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';
import './Russian.css'
import ListItem from './ListItem';
import Flashcard from './Flashcard';

const sites = ['Greetings'];

class Russian extends Component {

  render() {
    const {match} = this.props;

    const links = sites.map(site => {
      let topic = site.replace(/ /g,"_").toLowerCase();
      return(
        <ListItem key={topic} link={`${match.url}/${topic}`} text={site} />
      )
    })

    return (
      <Grid>
        <Row className='flex flex-justify-center'>
          <Col>
            <h2>русский</h2>
          </Col>
        </Row>
        {links}
        <Route path={`${this.props.match.url}/:topicId`} component={Flashcard} />
      </Grid>
    )
  }
}

export default Russian;
