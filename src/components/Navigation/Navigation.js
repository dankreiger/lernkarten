import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { translateLink } from '../../static/helpers';

import './Navigation.css';


const ListItemLink = ({ to, children }) => (
  <Route path={to} children={({match}) => (
    <li role="presentation" className={match ? 'active' : ''}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  )} />
);

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
