import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import { variableNames } from '../../../variableNames';
const home = variableNames.routes.urls.home;

const Nav = (props) => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <NavLink className='nav-title nav-link' to={home}>
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default connect()(Nav);
