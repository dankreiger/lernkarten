import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { translateLink } from '../../static/links';
import { Grid } from 'react-bootstrap';

const BreadcrumbMenu = ({history, language, lesson, currentLocation}) => {
  const links = translateLink(history.location.pathname);
  console.log(currentLocation)
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => { history.push('/') }}>{links.home}</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => { history.push(`/${links.url}`) }}>
        {history.location.pathname.includes('german') ? links.de : links.ru}
      </Breadcrumb.Item>
      {currentLocation && <Breadcrumb.Item active>{currentLocation}</Breadcrumb.Item>}
    </Breadcrumb>
  )
}

export default BreadcrumbMenu;
