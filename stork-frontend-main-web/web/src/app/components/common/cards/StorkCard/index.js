import React from 'react';
import PropTypes from 'prop-types';

const StorkCard = (props) => {
  const { avatarUrl, name, preferences, from, ago, id } = props;
  return (
    <div
      className="flex rounded-xl bg-white px-4 py-5 shadow-xl my-2 cursor-pointer"
      key={id}
    >
      <img
        className="h-14 rounded-full mr-4"
        src={avatarUrl}
        alt={`user-${id}`}
      />
      <div className="flex flex-col">
        <p className="text-xs font-gotham-book">{name}</p>
        <p className="text-sm font-gotham-bold">{preferences}</p>
        <p className="font-gotham-book text-xs leading-5">
          <span className="mr-5">{ago}</span>
          <span>{from}</span>
        </p>
      </div>
    </div>
  );
};

StorkCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preferences: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  ago: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StorkCard;
