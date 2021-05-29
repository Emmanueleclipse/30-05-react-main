/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c52822e95f21fe5a0c0b
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import patronOnboarding5 from '@images/patron-onboarding-5.svg';
import Onboarding from '@common/Onboarding';

const Onboarding5 = (props) => {
  const history = useHistory();

  const BecomeAStork = () => (
    <div
      className="bg-teal px-3 py-3 rounded-lg cursor-pointer"
      onClick={() => history.push('/stork-onboarding')}
      role="presentation"
    >
      <p className="font-gotham-bold text-white text-xs 2xs:text-sm">
        Become a Stork
      </p>
    </div>
  );
  return (
    <Onboarding
      image={patronOnboarding5}
      imageClassName="h-26vh"
      imageContainer="items-end pl-11"
      title={'Await your\ndelivery'}
      description="Get your order shipped or dropped off to you. Enjoy the unique items you’ve been craving and the culture you’ve missed!"
      buttonRightLabel="Get Started"
      ButtonLeft={BecomeAStork}
      {...props}
    />
  );
};

export default Onboarding5;
