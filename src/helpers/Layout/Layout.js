import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children, location }) => (
  <div className="Layout">
    <Navigation location={location}/>
    {children}
  </div>
);

export default Layout;
