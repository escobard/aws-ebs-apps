import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, callback }) => (
  <button onClick={() => callback()}> {text} </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default Button;
