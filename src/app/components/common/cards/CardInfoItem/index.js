import React from 'react';
import PropTypes from 'prop-types';

import CARD_BRAND from '@constants/cardBrandEnum';
import mastercardIcon from '@images/mastercard-icon.svg';
import visaIcon from '@images/visa-icon.svg';
import addPaymentIcon from '@images/add-payment-icon.svg';
import checkBlackIcon from '@images/check-black-icon.svg';

const CardInfoItem = ({
  brand = 'no-brand',
  last4,
  onClick = () => {},
  selected,
}) => {
  let icon = addPaymentIcon;

  switch (brand) {
    case CARD_BRAND.VISA:
      icon = visaIcon;
      break;
    case CARD_BRAND.MASTERCARD:
      icon = mastercardIcon;
      break;
    default:
      break;
  }

  const label = last4 ? `**** ${last4}` : 'Credit or debit card';
  return (
    <div
      className="flex w-full py-3 border-b-2 justify-between cursor-pointer"
      onClick={onClick}
      role="presentation"
    >
      <div className="flex">
        <img className="mr-4" src={icon} alt={`${brand}-icon`} />
        <p className="text-blue-gray text-xs font-gotham-medium">{label}</p>
      </div>
      {selected && <img src={checkBlackIcon} alt="check-black-icon" />}
    </div>
  );
};

CardInfoItem.defaultProps = {
  last4: null,
  selected: false,
  brand: '',
};

CardInfoItem.propTypes = {
  brand: PropTypes.string,
  last4: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default CardInfoItem;
