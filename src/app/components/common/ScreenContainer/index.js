import React from 'react';
import PropTypes from 'prop-types';

const ScreenContainer = ({ HeaderComponent, children, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="fixed container z-10">
        <HeaderComponent />
      </div>
      <div className="flex flex-col flex-1 pt-17">{children}</div>
    </div>
  );
};

ScreenContainer.defaultProps = {
  className: 'h-screen',
};

ScreenContainer.propTypes = {
  HeaderComponent: PropTypes.elementType.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
};

export default ScreenContainer;
