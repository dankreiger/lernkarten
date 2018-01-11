import React from 'react';
import Lessons from './Lessons';
import BreadcrumbMenu from '../../helpers/BreadcrumbMenu/BreadcrumbMenu';

// bootstrap components
import { Grid, Row, Col } from 'react-bootstrap';

const German = ({history, location, match}) => {
  const currentLocation = location.pathname.slice(8);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <BreadcrumbMenu language='Deutsch' history={history} currentLocation={capitalizeFirstLetter(currentLocation)} />
      <Grid>
        <Row className='flex flex-justify-center'>
          <Col sm={12} md={12}>
            <Lessons />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
export default German;
