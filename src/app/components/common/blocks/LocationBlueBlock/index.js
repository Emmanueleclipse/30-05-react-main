import React from 'react';
import PropTypes from 'prop-types';

import TitleBold from '@common/TitleBold';

const LocationBlueBlock = ({ title, children, className }) => {
  return (
    <div className={`bg-blue-gray ${className} px-7`}>
      <p className="font-gotham-bold text-2xs text-white text-opacity-95">
        Location
      </p>
      <TitleBold
        text={title}
        className="text-2xl -mt-0.5 tracking-1/5 text-opacity-95"
      />
      {children}
    </div>
  );
};

LocationBlueBlock.defaultProps = {
  className: 'py-7',
};

LocationBlueBlock.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default LocationBlueBlock;
