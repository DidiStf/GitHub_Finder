import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';

const Navbar = ({ icon, title }) => (
  <nav className='Navbar'>
    <Link to='/'>
      <h1>
        <i className={icon}> </i> {title}
      </h1>
    </Link>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

export default Navbar;
