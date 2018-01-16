import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'react-bootstrap';

import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../../static/vocabulary';
import { formatLink, translateTopic } from '../../static/helpers';

import './LanguageMenu.css';

const LanguageMenu = ({history, location, match}) => {
  const language = match.url.slice(1);

  return (
    <div className='LanguageMenu'>
      <BreadcrumbMenu history={history} currentLocation={formatLink(location.pathname)} />
      <Grid className="languageMenuList">
        {Object.entries(vocabulary[language]).map(([topic, words]) => {
          return (
            <div className="menuLinkRow" key={topic}>
              <Link className='menuLink' to={`${language}/${topic}`}>{translateTopic(language, topic)}</Link>
            </div>
          )
        })}
      </Grid>

    </div>
  )
}
export default LanguageMenu;
