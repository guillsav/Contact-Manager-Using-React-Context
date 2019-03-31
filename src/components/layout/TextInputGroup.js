import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './TextInputGroup.css';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  error,
  onChange
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames('', {'is-invalid': error})}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        error={error}
      />
      {error && <div className="error-feedback">{error}</div>}
    </React.Fragment>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
