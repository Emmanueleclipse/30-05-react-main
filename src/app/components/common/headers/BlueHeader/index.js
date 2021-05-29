import React from 'react';
import PropTypes from 'prop-types';

import backArrowWhite from '@images/back-arrow-white.svg';
import whiteBellIcon from '@images/white-bell-icon.svg';
import whiteMessagesIcon from '@images/white-messages-icon.svg';
import Button from '@common/Button';

const BlueHeader = ({
  withRightIcons,
  withAvatar,
  onClickLeft = () => {},
  // Props below will be likely removed to another common component
  children = null,
  buttonDisabled,
  onClickButton,
  withBottomButton,
  roundedClass,
}) => {
  return (
    <div>
      <div className="h-5 bg-blue-gray" />
      <div className="h-12 flex px-4 items-center justify-between bg-blue-gray">
        <div onClick={onClickLeft} role="presentation">
          {withAvatar ? (
            <img
              className="h-8 rounded-full mr-4"
              src="https://i.picsum.photos/id/766/30/30.jpg?hmac=FWB9bhMPYeqgp4hhFf375mc0fReTGEbzmtFoVFhXoVY"
              alt="user-avatar"
            />
          ) : (
            <img className="mr-4" src={backArrowWhite} alt="back-button" />
          )}
        </div>
        {withRightIcons && (
          <div className="flex">
            <img
              className="h-4 w-4"
              src={whiteBellIcon}
              alt="white-bell-icon"
            />
            <img
              className="h-4 w-4 ml-3"
              src={whiteMessagesIcon}
              alt="white-messages-icon"
            />
          </div>
        )}
      </div>
      {children && (
        <div className={`bg-blue-gray ${roundedClass} relative`}>
          {children}
          {withBottomButton && (
            <div className="absolute -bottom-5 w-full">
              <div className="flex justify-center">
                <Button
                  className="px-8"
                  label="Post a Request"
                  disabled={buttonDisabled}
                  onClick={onClickButton}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

BlueHeader.defaultProps = {
  roundedClass: 'rounded-b-3xl',
  withBottomButton: false,
  onClickButton: () => {},
  buttonDisabled: true,
  withAvatar: false,
  withRightIcons: false,
};

BlueHeader.propTypes = {
  withRightIcons: PropTypes.bool,
  withAvatar: PropTypes.bool,
  onClickLeft: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  buttonDisabled: PropTypes.bool,
  onClickButton: PropTypes.func,
  withBottomButton: PropTypes.bool,
  roundedClass: PropTypes.string,
};

export default BlueHeader;
