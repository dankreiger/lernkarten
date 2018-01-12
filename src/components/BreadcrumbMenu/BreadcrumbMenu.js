import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { translateLink } from '../../static/links';

const BreadcrumbMenu = ({history, lesson, currentLocation}) => {
  const path = history.location.pathname,
        links = translateLink(path);

  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => { history.push('/') }}>{links.home}</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => { history.push(`/${links.url}`) }}>
        {path.includes('german') ? links.de : links.ru}
      </Breadcrumb.Item>
      {currentLocation && <Breadcrumb.Item active>{currentLocation}</Breadcrumb.Item>}
    </Breadcrumb>
  )
}

export default BreadcrumbMenu;
