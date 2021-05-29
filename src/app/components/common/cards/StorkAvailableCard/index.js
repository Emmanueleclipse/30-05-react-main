import React from 'react';
import PropTypes from 'prop-types';

const StorkAvailableCard = (props) => {
  const {
    amount,
    photoUrl,
    name,
    location,
    ordersCompleted,
    currentOrders,
    isNew,
  } = props;

  return (
    <div className="flex shadow-xl rounded-2xl cursor-pointer">
      <div className="flex flex-grow items-center py-5 pl-5 pr-3">
        <img className="rounded-full" src={photoUrl} alt="" />
        <div className="ml-3">
          <p className="font-gotham-medium text-blue-gray text-sm -mb-1">
            {name}
          </p>
          <p className="font-gotham-bold text-blue-gray text-sm mb-2">
            {location}
          </p>
          <p className="font-gotham-medium text-gray-400 text-2xs">
            <span className="mr-4">Orders Completed {ordersCompleted}</span>
            {isNew && <span>New</span>}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-grow-0 w-20 justify-center items-start">
        <p className="font-gotham-bold text-orange text-sm">{amount}</p>
        <div className="flex mt-2">
          {currentOrders.map((order) => (
            <img
              className="rounded-full mr-1"
              key={order.id}
              src={order.photoUrl}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

StorkAvailableCard.defaultProps = {
  isNew: false,
};

StorkAvailableCard.propTypes = {
  amount: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  ordersCompleted: PropTypes.string.isRequired,
  currentOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  isNew: PropTypes.bool,
};

export default StorkAvailableCard;
