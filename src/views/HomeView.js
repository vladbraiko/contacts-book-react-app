import React from 'react';
import AuthNav from '../components/AppBar/AuthNav';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.homeView}>
    <div className={styles.content}>
      <div>
        <h1 className={styles.title}>Contacts Book</h1>
        <p className={styles.descriptionTitle}>
          is a secure place for saving your contacts.
        </p>
      </div>
      <div>
        <p className={styles.description}>
          Create an account for start or sign in if you already have ones.
        </p>
        <AuthNav />
      </div>
    </div>
  </div>
);

export default HomeView;
