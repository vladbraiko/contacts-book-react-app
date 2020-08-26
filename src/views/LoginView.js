import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import Input from '@material-ui/core/TextField';

import { NavLink } from 'react-router-dom';
import styles from './Form.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <h1 className={styles.title}>Login</h1>
          <span className={styles.description}>
            New to Contacts Book? Create an account.
          </span>
          <NavLink to="/register" exact className={styles.button}>
            Sign Up
          </NavLink>
        </div>

        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <div className={styles.input}>
            <Input
              id="standard-basic"
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              fullWidth={true}
            />
          </div>

          <div className={styles.input}>
            <Input
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              fullWidth={true}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
