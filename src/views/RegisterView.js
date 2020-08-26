import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../redux/auth/auth-operations';
import Input from '@material-ui/core/TextField';
import styles from './Form.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <h1 className={styles.title}>Sign Up</h1>
          <span className={styles.description}>Already have an account?</span>
          <NavLink to="/login" exact className={styles.button}>
            Log In
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
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              fullWidth={true}
            />
          </div>
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
