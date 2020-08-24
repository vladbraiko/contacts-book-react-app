import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../redux/auth/auth-operations';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <div>
        <h1>Sign Up</h1>
        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <Input
            id="standard-basic"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

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
            Sign Up
          </Button>
        </form>
        Уже есть аккаунт? войдите
        <NavLink
          to="/login"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Log In
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
