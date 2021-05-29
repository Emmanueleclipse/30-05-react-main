import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ label, className }) => (
  <p className={`font-gotham-medium text-lg text-blue-gray ${className}`}>
    {label}
  </p>
);

SectionTitle.defaultProps = {
  className: '',
};

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
