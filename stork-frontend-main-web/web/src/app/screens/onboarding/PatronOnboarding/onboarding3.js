/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32a71927ef8150dd1c8dec
 */

import React from 'react';

import patronOnboarding3 from '@images/patron-onboarding-3.svg';
import Onboarding from '@common/Onboarding';

const Onboarding3 = (props) => {
  return (
    <Onboarding
      image={patronOnboarding3}
      imageClassName="h-26vh"
      imageContainer="items-end pl-11"
      title={'Accept an\noffer'}
      description="Storks in the region will bid for your request. Once you accept an offer, your request becomes an order that your Stork will shop for."
      {...props}
    />
  );
};

export default Onboarding3;
