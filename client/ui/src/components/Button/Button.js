import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss"

const Button = ({ text, callback }) => (
  <button className="button" onClick={() => callback()}> {text} </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default Button;
