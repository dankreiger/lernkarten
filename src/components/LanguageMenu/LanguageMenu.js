import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'react-bootstrap';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import { formatLink } from '../../static/links';

import './LanguageMenu.css';

const LanguageMenu = ({history, location, match}) => {
  return (
    <div>
      <BreadcrumbMenu history={history} currentLocation={formatLink(location.pathname)} />
      <Grid className='flex flex-columns flex-align-items-center'>
        {Object.entries(vocabulary[match.url.slice(1)]).map(([topic, words]) => {
          return (
            <div className='flex flex-justify-center full-width' key={topic}>
              <Link className='menuLink' to={`${match.url}/${topic}`}>{topic}</Link>
            </div>
          )
        })}
      </Grid>

    </div>
  )
}
export default LanguageMenu;
