/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c726f46bbd2150efb873
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import StorkAvailableCard from '@common/cards/StorkAvailableCard';
import WhiteHeader from '@common/headers/WhiteHeader';
import { storksAvailable } from './mocks';

const PatronStorksAvailable = () => {
  const history = useHistory();
  const { state } = history.location;

  return (
    <div className="h-screen flex flex-col">
      <WhiteHeader
        onClickLeft={history.goBack}
        title="STORKS AVAILABLE"
        withRightIcons
      />
      <div className="flex justify-between px-7 py-4 bg-blue-gray">
        <div>
          <p className="font-gotham-bold text-white text-opacity-95">
            {state?.packageName}
          </p>
          <p className="font-gotham-medium text-white text-2xs text-opacity-95">
            {state?.fromTo}
          </p>
        </div>
        <div>
          <p className="font-gotham-bold text-orange text-right">
            {state?.amount1}
          </p>
          <p className="font-gotham-bold text-white text-2xs text-opacity-95 text-right">
            {state?.amount2}
          </p>
        </div>
      </div>
      <div className="p-4 pt-7 flex-1 flex flex-col">
        {storksAvailable.map(({ id, ...props }) => (
          <div className="mb-3" key={id}>
            <StorkAvailableCard {...props} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatronStorksAvailable;
