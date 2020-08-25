import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div className={styles.navLinks}>
    <NavLink to="/register" exact className={styles.authNav}>
      Sign Up
    </NavLink>
    <NavLink to="/login" exact className={styles.authNav}>
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
