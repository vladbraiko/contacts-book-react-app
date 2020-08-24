import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

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
      <div>
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <Input
            id="standard-basic"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <Input
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <Button type="submit" variant="outlined" color="primary">
            Log In
          </Button>
        </form>
        нет аккаунта? зарегайтесь
        <NavLink
          to="/register"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Sign Up
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
