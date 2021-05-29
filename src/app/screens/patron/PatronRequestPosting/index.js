import React from 'react';
import logoLoader from '@images/logo-loader.svg';

const PatronRequestPosting = () => {
  const textClassName = 'font-gotham-book text-sm text-gray-500 text-center';
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mb-16 flex flex-col items-center">
        <p className="font-gotham-medium text-blue-gray text-md mb-4">
          Posting your request!
        </p>
        <p className={textClassName}>We’ll notify you when Storks</p>
        <p className={textClassName}> start bidding.</p>
        <img className="mt-16" src={logoLoader} alt="logo-loader" />
      </div>
    </div>
  );
};

export default PatronRequestPosting;
