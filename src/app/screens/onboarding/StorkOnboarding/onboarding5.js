/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f7b019f51f73d02628
 */

import React from 'react';

import storkOnboarding5 from '@images/stork-onboarding-5.svg';
import Onboarding from '@common/Onboarding';

const Onboarding5 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding5}
      imageClassName="h-36vh"
      imageContainer="items-end pl-11"
      title={'Finalize the\norder'}
      description="After your shopping is complete, check off the items. Adjust for exact prices and weight."
      buttonLeftLabel="Back"
      {...props}
    />
  );
};

export default Onboarding5;
