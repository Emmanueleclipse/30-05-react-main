/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c4f766e2a351a578113e
 */

import React from 'react';

import storkOnboarding4 from '@images/stork-onboarding-4.svg';
import Onboarding from '@common/Onboarding';

const Onboarding4 = (props) => {
  return (
    <Onboarding
      image={storkOnboarding4}
      imageClassName="h-24vh"
      imageContainer="items-end pl-11"
      title={'Purchase the\norder'}
      description="Once your offer is accepted start shopping. Take photos of items and their price tags. Communicate with your Patron. Prepare for an exciting adventure getting these unique items."
      buttonLeftLabel="Back"
      {...props}
    />
  );
};

export default Onboarding4;
