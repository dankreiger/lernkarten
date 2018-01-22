import React from 'react'
import classNames from 'classnames';
import { Breadcrumb } from 'react-bootstrap';
import { translateLink, translateTopic } from '../../static/helpers';
import './BreadcrumbMenu.css';


const BreadcrumbMenu = ({history, lesson, currentLocation}) => {
  const path = history.location.pathname,
        navLinks = translateLink(path),
        currentLanguage = path.includes('german') ? navLinks.de : navLinks.ru,
        thirdBreadCrumb = translateTopic(navLinks.url, currentLocation.toLowerCase());
  return (
    <div className='breadcrumb-wrapper'>
      <Breadcrumb className='container'>
        <Breadcrumb.Item active={path.split('/').length === 1} onClick={() => { history.push('/') }}>{navLinks.home}</Breadcrumb.Item>
      <Breadcrumb.Item active={path.split('/').length === 2} onClick={() => { history.push(`/${navLinks.url}`) }}>{currentLanguage}</Breadcrumb.Item>
        {currentLocation && <Breadcrumb.Item active={path.split('/').length === 3} className={classNames({'longBreadCrumb': thirdBreadCrumb.length > 21})}>{thirdBreadCrumb}</Breadcrumb.Item>}
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbMenu;
