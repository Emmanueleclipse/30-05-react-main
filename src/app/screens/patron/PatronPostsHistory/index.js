/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c72742ac124d2794f823
 */

import React from 'react';

import RequestCard from '@common/cards/RequestCard';
import { parisRequests, lisbonRequests } from './mocks';

const PatronPostsHistory = () => {
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  return (
    <>
      <p className={regionTitleClass}>LISBON</p>
      {lisbonRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard {...props} />
        </div>
      ))}

      <p className={regionTitleClass}>PARIS</p>
      {parisRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard {...props} />
        </div>
      ))}
    </>
  );
};

export default PatronPostsHistory;
