import React from 'react';

// list item link helper
import ListItemLink from '../../helpers/ListItemLink/ListItemLink';
import { Link } from 'react-router-dom'

// bootstrap components
import { Navbar, Nav } from 'react-bootstrap';

// css
import './Navigation.css';

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Lernkarten</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <ListItemLink eventKey={1} to="/german">Deutsch</ListItemLink>
        <ListItemLink eventKey={2} to="/russian">Русский</ListItemLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default Navigation;
