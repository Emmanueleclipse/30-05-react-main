import React from 'react';
import PropTypes from 'prop-types';

import TitleBold from '@common/TitleBold';

const Onboarding = (props) => {
  const {
    image,
    imageClassName,
    imageContainer,
    title,
    description,
    buttonRightLabel,
    buttonLeftLabel,
    onClickButtonRight,
    onClickButtonLeft,
    ButtonLeft,
    length,
    index,
  } = props;
  const slides = [...Array(length).keys()];

  return (
    <div className="h-screen flex flex-col">
      <div className={`flex flex-1 ${imageContainer}`}>
        <img className={imageClassName} src={image} alt="" />
      </div>
      <div className="flex flex-col h-55vh px-11 justify-between pb-6">
        <div>
          <div className="mt-9 2xs:mt-12 mb-4 2xs:mb-7">
            <TitleBold
              className="tracking-widest leading-6 2xs:leading-7"
              sizeClassName="text-lg 2xs:text-xl"
              text={title}
            />
          </div>
          <p className="font-gotham-medium text-white text-xs 2xs:text-sm text-opacity-90">
            {description}
          </p>
        </div>
        <div>
          <div className="flex mb-2">
            {slides.map((value) => {
              const slotWidth = value === index ? 'w-5' : 'w-1';
              return (
                <div
                  key={value}
                  className={`h-1 ${slotWidth} bg-teal-light rounded-full mr-1`}
                />
              );
            })}
          </div>
          <div className="h-16 flex items-center justify-between">
            {ButtonLeft ? (
              <ButtonLeft />
            ) : (
              <p
                className="font-gotham-bold text-white text-xs 2xs:text-sm text-opacity-90"
                onClick={onClickButtonLeft}
                role="presentation"
              >
                {buttonLeftLabel}
              </p>
            )}
            <p
              className="font-gotham-bold text-white text-xs 2xs:text-sm text-opacity-90"
              onClick={onClickButtonRight}
              role="presentation"
            >
              {buttonRightLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Onboarding.defaultProps = {
  buttonRightLabel: 'Skip',
  onClickButtonRight: () => {},
  imageContainer: '',
  ButtonLeft: null,
  imageClassName: '',
  buttonLeftLabel: '',
  onClickButtonLeft: () => {},
};

Onboarding.propTypes = {
  image: PropTypes.node.isRequired,
  imageClassName: PropTypes.string,
  imageContainer: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonRightLabel: PropTypes.string,
  onClickButtonRight: PropTypes.func,
  ButtonLeft: PropTypes.func,
  buttonLeftLabel: PropTypes.string,
  onClickButtonLeft: PropTypes.func,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Onboarding;
