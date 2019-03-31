import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = props => {
  const {branding} = props;
  return (
    <div className="Header">
      <div className="container">
        <h1>{branding}</h1>
        <nav>
          <Link to="/">
            <i className="fas fa-home fa-md" /> Home
          </Link>
          <Link to="/contact/add">
            <i className="fas fa-plus fa-md" /> Add
          </Link>
          <Link to="/about">
            <i className="fas fa-question fa-md" /> About
          </Link>
        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
