/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32a71aa22ffe52deb851ea
 */

import React from 'react';

import patronOnboarding1 from '@images/patron-onboarding-1.svg';
import Onboarding from '@common/Onboarding';

const Onboarding1 = (props) => {
  return (
    <Onboarding
      image={patronOnboarding1}
      imageClassName="h-40vh"
      imageContainer="items-end justify-center"
      title={'Choose the\nregion'}
      description="Think of a place and the items you crave that are unique to that region."
      {...props}
    />
  );
};

export default Onboarding1;
