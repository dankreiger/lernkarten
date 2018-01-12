import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap';
import './Russian.css';
import BreadcrumbMenu from '../../helpers/BreadcrumbMenu/BreadcrumbMenu';
import ListItem from './ListItem';
import Flashcard from './Flashcard';

const sites = ['Greetings'];

class Russian extends Component {

  render() {
    const { match, location } = this.props;

    const links = sites.map(site => {
      let topic = site.replace(/ /g,"_").toLowerCase();
      return(
        <ListItem key={topic} link={`${match.url}/${topic}`} text={site} />
      )
    })

    return (
      <Grid>
        <Row className='flex'>
          <BreadcrumbMenu
            history={this.props.history}language={'русский'} />
        </Row>
        {links}
        <Route path={`${this.props.match.url}/:topicId`} component={Flashcard} />
      </Grid>
    )
  }
}

export default Russian;
