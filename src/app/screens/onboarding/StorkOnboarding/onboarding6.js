/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f72daf03217ffd5ce3
 */

import React from 'react';

import storkOnboarding6 from '@images/stork-onboarding-6.svg';
import Onboarding from '@common/Onboarding';

const Onboarding1 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding6}
      imageClassName="h-45vh"
      imageContainer="items-start justify-start"
      title={'Deliver the\ngoods'}
      description="Ship or drop off the order to your Patron. Get paid and start another Stork adventure in your region!"
      buttonLeftLabel="Back"
      buttonRightLabel="Get Started"
      {...props}
    />
  );
};

export default Onboarding1;
