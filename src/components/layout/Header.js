import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => {
  const {branding} = props;
  return (
    <div className="Header">
      <div className="container">
        <h1>{branding}</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
