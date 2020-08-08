import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <form className={styles.form} onSubmit={this.onSubmit}>
          <label>
            <h2 className={styles.title_form}>Name</h2>
            <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label>
            <h2 className={styles.title_form}>Number</h2>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button className={styles.add_contact_btn} type="submit">
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
