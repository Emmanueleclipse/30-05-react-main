import React from 'react';
import PropTypes from 'prop-types';

import checkBubbleActive from '@images/check-bubble-active.svg';
import checkBubbleInactive from '@images/check-bubble-inactive.svg';

const CheckWithLabel = (props) => {
  const { label, active, className, onClick, description } = props;
  const checkBubble = active ? checkBubbleActive : checkBubbleInactive;
  const labelColor = active ? 'text-blue-gray' : 'text-gray-300';
  return (
    <div className={`flex items-start ${className}`}>
      <img
        src={checkBubble}
        alt="check-bubble"
        onClick={onClick}
        role="presentation"
      />
      <div className="ml-2 mt-1">
        <p className={`font-gotham-medium text-xs mb-1 ${labelColor}`}>
          {label}
        </p>
        {description && (
          <p className={`font-gotham-book text-2xs ${labelColor}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

CheckWithLabel.defaultProps = {
  active: false,
  description: null,
  onClick: () => {},
  className: '',
};

CheckWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string,
};

export default CheckWithLabel;
