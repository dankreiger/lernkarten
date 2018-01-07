import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => (
  <div className="Layout">
    <div>
      <Navigation />
    </div>
    {children}
  </div>
);

export default Layout;
