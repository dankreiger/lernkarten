import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'react-bootstrap';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import { formatLink, snakeToTitle } from '../../static/helpers';

import './LanguageMenu.css';

const LanguageMenu = ({history, location, match}) => {
  return (
    <div className='LanguageMenu'>
      <BreadcrumbMenu history={history} currentLocation={formatLink(location.pathname)} />
      <Grid className="languageMenuList">
        {Object.entries(vocabulary[match.url.slice(1)]).map(([topic, words]) => {
          return (
            <div className="menuLinkRow" key={topic}>
              <Link className='menuLink' to={`${match.url}/${topic}`}>{snakeToTitle(topic)}</Link>
            </div>
          )
        })}
      </Grid>

    </div>
  )
}
export default LanguageMenu;
