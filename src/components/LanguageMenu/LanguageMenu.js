import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';

import BreadcrumbMenu from '../../helpers/BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import Flashcard from '../Flashcard/Flashcard';
import './LanguageMenu.css';

const LanguageMenu = ({history, location, match}) => {
  const currentLocation = location.pathname.includes('german') ? location.pathname.slice(8) : location.pathname.slice(9);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const linkStyle = location.pathname !== match.url ? {'display': 'none'} : null;

  const language = location.pathname.slice(1);
  return (
    <div>
      <BreadcrumbMenu language={capitalizeFirstLetter(match.url.slice(1))} history={history} currentLocation={capitalizeFirstLetter(currentLocation)} />
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
export default LanguageMenu;
