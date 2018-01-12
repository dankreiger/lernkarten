import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { translateLink } from '../../static/links';
import './BreadcrumbMenu.css';


const BreadcrumbMenu = ({history, lesson, currentLocation}) => {
  const path = history.location.pathname,
        links = translateLink(path);

  return (
    <div class='breadcrumb-wrapper'>
      <Breadcrumb className='container'>
        <Breadcrumb.Item onClick={() => { history.push('/') }}>{links.home}</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => { history.push(`/${links.url}`) }}>
          {path.includes('german') ? links.de : links.ru}
        </Breadcrumb.Item>
        {currentLocation && <Breadcrumb.Item active>{currentLocation}</Breadcrumb.Item>}
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbMenu;
