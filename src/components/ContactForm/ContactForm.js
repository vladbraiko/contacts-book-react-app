import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '@material-ui/core/TextField';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/phoneBook/phoneBook-operations';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.onSubmit}>
          <div className={styles.input}>
            <Input
              type="name"
              name="name"
              id="standard-basic"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              fullWidth={true}
            />
          </div>

          <div className={styles.input}>
            <Input
              type="tel"
              name="number"
              id="standard-basic"
              label="Number"
              value={this.state.number}
              onChange={this.handleChange}
              fullWidth={true}
            />
          </div>

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = {
  onSubmit: addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
