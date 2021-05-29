import React from 'react';
import PropTypes from 'prop-types';

import RoundedCard from '@common/cards/RoundedCard';

const CompensationCard = ({ label, weight, amount }) => {
  return (
    <RoundedCard paddingVertical="py-0" paddingHorizontal="pl-6 pr-3">
      <div className="flex justify-between">
        <div className="flex flex-1 justify-between pr-5">
          <p className="font-gotham-book text-xs text-blue-gray py-5">
            {label}
          </p>
          <p className="font-gotham-medium text-xs text-blue-gray py-5">
            {weight}
          </p>
        </div>
        <p className="font-gotham-medium text-xs text-orange py-5 border-l w-19 text-right">
          {amount}
        </p>
      </div>
    </RoundedCard>
  );
};

CompensationCard.defaultProps = {
  weight: '',
};

CompensationCard.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  weight: PropTypes.string,
};

export default CompensationCard;
