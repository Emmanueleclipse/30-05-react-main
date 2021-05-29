import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import Onboarding1 from './onboarding1';
import Onboarding2 from './onboarding2';
import Onboarding3 from './onboarding3';
import Onboarding4 from './onboarding4';
import Onboarding5 from './onboarding5';

const PatronOnboarding = () => {
  const [swiper, setSwiper] = useState(null);
  const history = useHistory();
  const slides = [
    {
      key: 1,
      Onboarding: Onboarding1,
    },
    {
      key: 2,
      Onboarding: Onboarding2,
    },
    {
      key: 3,
      Onboarding: Onboarding3,
    },
    {
      key: 4,
      Onboarding: Onboarding4,
    },
  ];
  const navigateToLastSlide = () => {
    swiper.slideTo(slides.length);
  };

  return (
    <div className="bg-blue-gray">
      <Swiper onSwiper={setSwiper}>
        {slides.map(({ Onboarding, key }, index) => (
          <SwiperSlide key={key}>
            <Onboarding
              onClickButtonRight={navigateToLastSlide}
              index={index}
              length={slides.length + 1}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Onboarding5
            onClickButtonRight={() => history.push('/sign-up')}
            index={slides.length}
            length={slides.length + 1}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PatronOnboarding;
