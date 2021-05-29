/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f6f46bbd2150ef9ea0
 */

import React from 'react';

import storkOnboarding1 from '@images/stork-onboarding-1.svg';
import Onboarding from '@common/Onboarding';

const Onboarding1 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding1}
      imageClassName="h-45vh"
      imageContainer="items-start justify-end"
      title={'Share your\nregion'}
      description="Let us know your current location so that you can be available for matches."
      buttonLeftLabel="Back"
      {...props}
    />
  );
};

export default Onboarding1;
