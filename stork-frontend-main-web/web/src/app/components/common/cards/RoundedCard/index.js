import React from 'react';
import PropTypes from 'prop-types';

const RoundedCard = ({ children, paddingVertical, paddingHorizontal }) => {
  return (
    <div
      className={`rounded-2xl shadow-xl ${paddingHorizontal} ${paddingVertical}`}
    >
      {children}
    </div>
  );
};

RoundedCard.defaultProps = {
  paddingVertical: 'py-4',
  paddingHorizontal: 'px-6',
};

RoundedCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  paddingVertical: PropTypes.string,
  paddingHorizontal: PropTypes.string,
};

export default RoundedCard;
