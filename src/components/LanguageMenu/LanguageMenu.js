import React from 'react';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import BreadcrumbMenu from '../BreadcrumbMenu/BreadcrumbMenu';
import LanguageMenuList from './LanguageMenuList';
import { formatLink } from '../../static/helpers';

import './LanguageMenu.css';

const LanguageMenu = ({history, location, match}) => {
  const currentLocation = location.pathname,
        subPaths = currentLocation.split('/'),
        language = subPaths[1],
        currentSubpath = subPaths[subPaths.length - 1];

  return (
    <div className='LanguageMenu'>
      <BreadcrumbMenu history={history} subPaths={subPaths} currentSubpath={currentSubpath} currentLocation={formatLink(currentLocation)} />
      <Grid className={classNames('languageMenuList', `${currentSubpath}MenuList`)}>
        <LanguageMenuList currentLocation={currentLocation} language={language} subPaths={subPaths} currentSubpath={currentSubpath} />
      </Grid>
    </div>
  )
}
export default LanguageMenu;
