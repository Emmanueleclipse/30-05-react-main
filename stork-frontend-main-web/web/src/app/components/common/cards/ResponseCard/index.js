import React from 'react';
import PropTypes from 'prop-types';

const ResponseCard = ({ label, type, onClick }) => {
  let labelColor;
  let bgColor;
  if (type === 'error') {
    bgColor = 'bg-orange-error-light';
    labelColor = 'text-orange-error';
  }
  const baseClassName = `flex w-full justify-center rounded-xl
    py-4 focus:outline-none`;

  return (
    <button
      className={`${baseClassName} ${bgColor}`}
      type="button"
      onClick={onClick}
    >
      <p className={`font-gotham-book text-xs ${labelColor}`}>
        {label || 'Oops, something went wrong!'}
      </p>
    </button>
  );
};

ResponseCard.defaultProps = {
  type: 'error',
  onClick: () => {},
  label: '',
};

ResponseCard.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ResponseCard;
