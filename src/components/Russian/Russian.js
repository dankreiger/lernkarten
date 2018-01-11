import React from 'react';
import { Grid } from 'react-bootstrap';
import './Russian.css';
import BreadcrumbMenu from '../../helpers/BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from './static/vocabulary';
import { Link, Route } from 'react-router-dom'
import Flashcard from './Flashcard';

const Russian = ({history, location, match}) => {
  const currentLocation = location.pathname.slice(9);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const linkStyle = history.location.pathname !== '/russian' ? {'display': 'none'} : null;

  return (
    <div>
      <BreadcrumbMenu language='Русский' history={history} currentLocation={capitalizeFirstLetter(currentLocation)} />
      <Grid className='flex flex-columns flex-align-items-center'>
        {Object.entries(vocabulary).map(([topic, words]) => {
          let link = `${match.url}/${topic}`;

          return (
            <div className='flex flex-justify-center full-width' key={topic}>
              <Link className='menuLink' style={linkStyle} to={link}>{topic}</Link>
              <Route path={link} render={ ()=> <Flashcard words={words} someProp={100}/> } />
            </div>
          )
        })}
      </Grid>

    </div>
  )
}
export default Russian;
