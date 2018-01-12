import React from 'react';
import Lessons from '../../helpers/Lessons/Lessons';
import BreadcrumbMenu from '../../helpers/BreadcrumbMenu/BreadcrumbMenu';
import vocabulary from '../static/vocabulary';

// bootstrap components
import { Grid, Row, Col } from 'react-bootstrap';

const LanguageMenu = ({history, match, path}) => {
  const currentLocation = history.location.pathname;
  const language = match.url === '/german' ? 'Deutsch' : 'Пошли'

  return (
    <div>
      <BreadcrumbMenu language={language} history={history} currentLocation={currentLocation} />
      <Grid>
        <Row className='flex flex-justify-center'>
          <Col sm={12} md={12}>
            <Lessons vocabulary={vocabulary} currentLanguageRoute={currentLocation} />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
export default LanguageMenu;
