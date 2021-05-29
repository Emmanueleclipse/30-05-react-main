import React from 'react';
import PropTypes from 'prop-types';

const LiveTealBlock = (props) => {
  const { photoUrl, name, timeLeft, onClickAvatar = () => {} } = props;
  const textWhiteClass = 'font-gotham-bold text-white text-opacity-90 text-lg';
  return (
    <div className="flex py-3 bg-teal px-8 justify-between items-center">
      <div className="flex items-center">
        <img
          className="rounded-full w-11"
          src={photoUrl}
          alt=""
          onClick={onClickAvatar}
          role="presentation"
        />
        <p className={`${textWhiteClass} ml-4`}>{name}</p>
      </div>
      <p className={textWhiteClass}>{timeLeft}</p>
    </div>
  );
};

LiveTealBlock.propTypes = {
  onClickAvatar: PropTypes.func.isRequired,
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

export default LiveTealBlock;
