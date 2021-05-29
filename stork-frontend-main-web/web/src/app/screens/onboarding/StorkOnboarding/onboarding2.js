/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f6653dc9515832bbb7
 */

import React from 'react';

import storkOnboarding2 from '@images/stork-onboarding-2.svg';
import Onboarding from '@common/Onboarding';

const Onboarding2 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding2}
      imageClassName="h-26vh"
      imageContainer="items-end pl-11"
      title={'Check your\nmatches'}
      description="You’ll see requests from Patrons who desire items from your current location."
      buttonLeftLabel="Back"
      {...props}
    />
  );
};

export default Onboarding2;
