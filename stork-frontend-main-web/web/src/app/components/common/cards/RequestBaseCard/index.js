import React from 'react';
import PropTypes from 'prop-types';

import orangeIncreaseIcon from '@images/orange-increase-icon.svg';
import checkInactiveTeal from '@images/check-inactive-teal.svg';
import checkActiveTealOutline from '@images/check-active-teal-outline.svg';
import checkActiveTeal from '@images/check-active-teal.svg';
import closeXIcon from '@images/close-x-icon.svg';

const RequestBaseCard = (props) => {
  const {
    photoUrl,
    amount1,
    amount2,
    children,
    imgClassName,
    type,
    onClick,
    withCheckBubble,
    onClickClose,
    withCloseButton,
  } = props;
  const borderLClass = photoUrl ? 'border-l' : '';
  const paddingClass = photoUrl ? '' : 'py-4 px-1';

  let checkSource;
  if (withCheckBubble) {
    switch (withCheckBubble) {
      case 'inactive':
        checkSource = checkInactiveTeal;
        break;
      case 'active-outline':
        checkSource = checkActiveTealOutline;
        break;
      case 'active':
        checkSource = checkActiveTeal;
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={`flex shadow-xl rounded-2xl cursor-pointer ${paddingClass} relative`}
      onClick={onClick}
      role="presentation"
    >
      {withCloseButton && (
        <button
          className="absolute right-3 top-3"
          type="button"
          onClick={onClickClose}
        >
          <img src={closeXIcon} alt="" />
        </button>
      )}
      <div className="flex flex-grow items-center p-3">
        {photoUrl && <img className={imgClassName} src={photoUrl} alt="" />}
        <div className="flex flex-col ml-3">{children}</div>
      </div>
      <div
        className={`flex flex-col flex-grow-0 w-18 justify-center items-end mr-4 ${borderLClass}`}
      >
        {type === 'item-request' && (
          <>
            <p className="text-orange font-gotham-bold text-xs">{amount1}</p>
            <p className="font-gotham-medium text-blue-gray text-2xs">
              {amount2}
            </p>
            {withCheckBubble && (
              <img className="mt-2" src={checkSource} alt="" />
            )}
          </>
        )}
        {type === 'requests' && (
          <>
            <p className="font-gotham-bold text-blue-gray text-xs">{amount1}</p>
            <div className="flex">
              <img className="mb-1 mr-1" src={orangeIncreaseIcon} alt="" />
              <p className="font-gotham-bold text-orange-light text-2xs">
                {amount2}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

RequestBaseCard.defaultProps = {
  type: 'item-request',
  onClick: () => {},
  photoUrl: null,
  withCheckBubble: null,
  onClickClose: () => {},
  withCloseButton: false,
};

RequestBaseCard.propTypes = {
  amount2: PropTypes.string.isRequired,
  amount1: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  imgClassName: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  withCheckBubble: PropTypes.string,
  onClickClose: PropTypes.func,
  withCloseButton: PropTypes.bool,
};

export default RequestBaseCard;
