import React from 'react'
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbMenu = ({history, language, lesson, currentLocation}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => { history.push('/') }}>Home</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => { history.push(`/${language === 'Deutsch' ? 'german' : 'russian'}`) }}>
        {language}
      </Breadcrumb.Item>
      {currentLocation && <Breadcrumb.Item active>{currentLocation}</Breadcrumb.Item>}
    </Breadcrumb>
  )
}

export default BreadcrumbMenu;
