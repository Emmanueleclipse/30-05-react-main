import React from 'react';
import PropTypes from 'prop-types';

import backArrowBlack from '@images/back-arrow-black.svg';
import blueBellIcon from '@images/blue-bell-icon.svg';
import blueMessagesIcon from '@images/blue-messages-icon.svg';

const WhiteHeader = (props) => {
  const {
    withAvatar,
    onClickLeft = () => {},
    withRightIcons,
    title,
    bgClassName,
  } = props;
  return (
    <div className={`flex flex-col ${bgClassName}`}>
      <div className="h-5" />
      <div className="h-12 flex px-4 items-center justify-between relative">
        <div onClick={onClickLeft} role="presentation">
          {withAvatar ? (
            <img
              className="h-8 rounded-full mr-4"
              src="https://i.picsum.photos/id/766/30/30.jpg?hmac=FWB9bhMPYeqgp4hhFf375mc0fReTGEbzmtFoVFhXoVY"
              alt="user-avatar"
            />
          ) : (
            <img className="mr-4" src={backArrowBlack} alt="back-button" />
          )}
        </div>
        {title && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <p className="font-montserrat font-bold text-sm text-blue-gray tracking-wide">
              {title}
            </p>
          </div>
        )}
        {withRightIcons && (
          <div className="flex">
            <img className="h-4 w-4" src={blueBellIcon} alt="white-bell-icon" />
            <img
              className="h-4 w-4 ml-3"
              src={blueMessagesIcon}
              alt="white-messages-icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

WhiteHeader.defaultProps = {
  withAvatar: false,
  withRightIcons: false,
  title: null,
  bgClassName: 'bg-white',
};

WhiteHeader.propTypes = {
  withAvatar: PropTypes.bool,
  onClickLeft: PropTypes.func.isRequired,
  withRightIcons: PropTypes.bool,
  title: PropTypes.string,
  bgClassName: PropTypes.string,
};

export default WhiteHeader;
