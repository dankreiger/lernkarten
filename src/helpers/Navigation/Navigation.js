import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

import { translateLink } from '../../static/links';
import ListItemLink from '../../helpers/ListItemLink/ListItemLink';

import './Navigation.css';



const Navigation = ({location}) => {
  const path = location.pathname;

  const {brand, de, ru} = translateLink(path);

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">{brand}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <ListItemLink eventKey={1} to="/german">{de}</ListItemLink>
        <ListItemLink eventKey={2} to="/russian">{ru}</ListItemLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigation;
