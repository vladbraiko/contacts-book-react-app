import React from 'react';
import AuthNav from '../components/AppBar/AuthNav';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.homeView}>
    <div className={styles.content}>
      <div>
        <h1 className={styles.title}>Phonne Book</h1>
        <p className={styles.descriptionTitle}>
          is a secure place for saving your contacts.
        </p>
      </div>
      <div className={styles.authNav}>
        <p className={styles.description}>
          Create an account for start using or sign in if you already have ones.
        </p>
        <AuthNav />
      </div>
    </div>
  </div>
);

export default HomeView;
