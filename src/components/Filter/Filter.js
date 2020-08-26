import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import Input from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phoneBook/phoneBook-actions';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';

function Filter({ value, onChange }) {
  return (
    <div className={styles.input}>
      <Input
        type="text"
        label="Filter contacts by name"
        fullWidth={true}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStatetoProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);
