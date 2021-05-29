import React from 'react';
import PropTypes from 'prop-types';

import RoundedCard from '@common/cards/RoundedCard';

const ShippingBoxCard = (props) => {
  const { trackingNumber, weight, boxNumber } = props;
  const gothamMediumSm = 'font-gotham-medium text-blue-gray text-sm';
  const gothamBook2xs = 'font-gotham-book text-blue-gray text-2xs';
  return (
    <RoundedCard paddingVertical="py-5">
      <p className="font-gotham-book text-blue-gray text-xs mb-4">
        Shipping Box {boxNumber}
      </p>
      <div className="flex justify-between">
        <div>
          <p className={gothamMediumSm}>{trackingNumber}</p>
          <p className={gothamBook2xs}>Tracking #</p>
        </div>
        <div className="mr-5">
          <p className={gothamMediumSm}>{weight}</p>
          <p className={gothamBook2xs}>Weight</p>
        </div>
      </div>
    </RoundedCard>
  );
};

ShippingBoxCard.propTypes = {
  trackingNumber: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  boxNumber: PropTypes.number.isRequired,
};

export default ShippingBoxCard;
