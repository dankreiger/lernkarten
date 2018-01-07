import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const ListItemLink = ({ to, children }) => (
  <Route path={to} children={({match}) => (
    <li role="presentation" className={match ? 'active' : ''}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  )} />
);

export default ListItemLink;
