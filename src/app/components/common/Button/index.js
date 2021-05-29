import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, onClick, label, className = '', color }) => {
  const bgColor = disabled ? 'bg-gray-400' : `bg-${color}`;
  return (
    <button
      className={`h-10 text-white rounded-3xl text-sm font-gotham-bold ${bgColor} ${className}`}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: true,
  color: 'teal',
  onClick: () => {},
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
