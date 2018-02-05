import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { translateLink } from '../../helpers/functions';

import './Navigation.css';


const ListItemLink = ({ to, children, anchorClass }) => (
  <Route path={to} children={({match}) => (
    <li role="presentation" className={match ? 'active' : ''}>
      <NavLink className={anchorClass} to={to}>{children}</NavLink>
    </li>
  )} />
);

const Navigation = ({location}) => {
  const path = location.pathname,
        subPaths = path.split('/');
  const {brand, de, ru, quiz} = translateLink(path);

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
          <ListItemLink anchorClass='german' eventKey={1} to="/german">{de}</ListItemLink>
          <ListItemLink anchorClass='russian' eventKey={2} to="/russian">{ru}</ListItemLink>
        {subPaths.length === 3 && <ListItemLink anchorClass='quiz' eventKey={3} to={`/${subPaths[1]}/${subPaths[2]}/quiz`}>{quiz}</ListItemLink>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigation;
