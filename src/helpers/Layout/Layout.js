import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => (
  <div className="Layout">
    <Navigation />
    {children}
  </div>
);

export default Layout;
