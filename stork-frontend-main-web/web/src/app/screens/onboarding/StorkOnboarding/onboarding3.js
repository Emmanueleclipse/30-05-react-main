/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f7c67e6b208a7c0ec9
 */

import React from 'react';

import storkOnboarding3 from '@images/stork-onboarding-3.svg';
import Onboarding from '@common/Onboarding';

const Onboarding3 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding3}
      imageClassName="h-35vh"
      imageContainer="items-end pl-20"
      title={'Bid for a\nrequest'}
      description="Choose a request you’d like to bid for. Think about how much effort it would take. Make an offer for getting these unique items."
      buttonLeftLabel="Back"
      {...props}
    />
  );
};

export default Onboarding3;
