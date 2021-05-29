/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32a719c88de01e02ae44ca
 */

import React from 'react';

import patronOnboarding2 from '@images/patron-onboarding-2.svg';
import Onboarding from '@common/Onboarding';

const Onboarding2 = (props) => {
  return (
    <Onboarding
      image={patronOnboarding2}
      imageClassName="h-32vh"
      imageContainer="items-end justify-center"
      title={'Post a\nrequest'}
      description="Fill in an item request form. You can ask for multiple items per request."
      {...props}
    />
  );
};

export default Onboarding2;
