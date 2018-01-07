import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ListItem = ({link, text}) => (
  <Row>
    <Col sm={12} md={12}>
      <Link to={link}>{text}</Link>
    </Col>
  </Row>
);

export default ListItem;
