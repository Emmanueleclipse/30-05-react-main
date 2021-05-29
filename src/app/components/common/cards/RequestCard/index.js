import React from 'react';
import PropTypes from 'prop-types';

import tinyRedCircle from '@images/tiny-red-circle.svg';
import RequestBaseCard from '@common/cards/RequestBaseCard';

const RequestCard = (props) => {
  const {
    name,
    packageName,
    statusDescription,
    isLiveBid,
    ...baseProps
  } = props;
  const gothamBook2xs = 'font-gotham-book text-blue-gray text-2xs';

  return (
    <RequestBaseCard
      {...baseProps}
      imgClassName="rounded-full my-3 w-15"
      type="requests"
    >
      <p className={gothamBook2xs}>{name}</p>
      <p className="font-gotham-medium text-blue-gray text-xs mb-1">
        {packageName}
      </p>
      <p className={gothamBook2xs}>{statusDescription}</p>
      {isLiveBid && (
        <div className="flex mt-1">
          <img className="mr-2 mb-0.5" src={tinyRedCircle} alt="" />
          <p className={gothamBook2xs}>Live Bid</p>
        </div>
      )}
    </RequestBaseCard>
  );
};

RequestCard.defaultProps = {
  isLiveBid: null,
  statusDescription: '',
};

RequestCard.propTypes = {
  name: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  statusDescription: PropTypes.string,
  isLiveBid: PropTypes.bool,
};

export default RequestCard;
