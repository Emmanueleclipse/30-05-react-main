/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32a71a0f9db153673f2ce3
 */

import React from 'react';

import patronOnboarding4 from '@images/patron-onboarding-4.svg';
import Onboarding from '@common/Onboarding';

const Onboarding4 = (props) => {
  return (
    <Onboarding
      image={patronOnboarding4}
      imageClassName="h-24vh"
      imageContainer="items-end pl-11"
      title={'Connect with\nyour Stork'}
      description="They have something in common with you, a love for the region. Message your Stork and share a special experience with them as they venture to get your order."
      {...props}
    />
  );
};

export default Onboarding4;
