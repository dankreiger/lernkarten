import React from 'react'
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbMenu = ({history, language, lesson, currentLocation}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => { history.push('/') }}>Home</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => { history.push(`/${currentLocation}`) }}>
        {language}
      </Breadcrumb.Item>
      {currentLocation && <Breadcrumb.Item active>{currentLocation}</Breadcrumb.Item>}
    </Breadcrumb>
  )
}

export default BreadcrumbMenu;
