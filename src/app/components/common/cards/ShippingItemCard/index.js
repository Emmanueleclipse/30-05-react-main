import React from 'react';
import PropTypes from 'prop-types';

import RoundedCard from '@common/cards/RoundedCard';
import checkInactiveTeal from '@images/check-inactive-teal.svg';
import checkActiveTealOutline from '@images/check-active-teal-outline.svg';
import checkActiveTeal from '@images/check-active-teal.svg';

const ShippingItemCard = (props) => {
  const { photoUrl, packageName, quantity, status } = props;
  let checkSource;
  switch (status) {
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

  return (
    <RoundedCard paddingHorizontal="pl-4 pr-6">
      <div className="flex justify-betweeen">
        <div className="flex flex-1 items-center">
          <img className="rounded-lg w-8 mr-3" src={photoUrl} alt="" />
          <p className="font-gotham-medium text-blue-gray text-xs">
            {packageName}
          </p>
        </div>
        <div className="flex flex-grow-0 justify-between items-center w-19">
          <p className="font-gotham-bold text-blue-gray text-xs">{quantity}</p>
          <img className="w-5" src={checkSource} alt="" />
        </div>
      </div>
    </RoundedCard>
  );
};

ShippingItemCard.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ShippingItemCard;
