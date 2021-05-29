import React from 'react';
import PropTypes from 'prop-types';

import logoLoader from '@images/logo-loader.svg';

const ProcessingRequest = ({ title, paragraph1, paragraph2 }) => {
  const textClassName = 'font-gotham-book text-sm text-gray-500 text-center';
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mb-16 flex flex-col items-center">
        <p className="font-gotham-medium text-blue-gray text-md mb-4">
          {title}
        </p>
        <p className={textClassName}>{paragraph1}</p>
        <p className={textClassName}>{paragraph2}</p>
        <img className="mt-16" src={logoLoader} alt="logo-loader" />
      </div>
    </div>
  );
};

ProcessingRequest.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
};

export default ProcessingRequest;
