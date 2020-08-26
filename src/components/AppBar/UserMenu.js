import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDisspatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDisspatchToProps)(UserMenu);
