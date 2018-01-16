import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import ReactFitText from 'react-fittext';
import { translateLink, translateTopic } from '../../static/helpers';
import './BreadcrumbMenu.css';


const BreadcrumbMenu = ({history, lesson, currentLocation}) => {
  const path = history.location.pathname,
        links = translateLink(path),
        currentLanguage = path.includes('german') ? links.de : links.ru;

  return (
    <div className='breadcrumb-wrapper'>
      <ReactFitText minFontSize={12} compressor={3.5}>
        <Breadcrumb className='container'>
          <Breadcrumb.Item onClick={() => { history.push('/') }}>{links.home}</Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => { history.push(`/${links.url}`) }}>{currentLanguage}</Breadcrumb.Item>
          {currentLocation && <Breadcrumb.Item active>{translateTopic(links.url, currentLocation.toLowerCase())}</Breadcrumb.Item>}
        </Breadcrumb>
      </ReactFitText>
    </div>
  )
}

export default BreadcrumbMenu;
