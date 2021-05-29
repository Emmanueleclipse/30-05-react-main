import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import moment from 'moment';

const LiveTealBlock = (props) => {
  const ONE_DAY = 86400000; // 1 day in miliseconds
  const {
    photoUrl,
    name,
    timeLeft,
    createdAt,
    onClickAvatar = () => {},
  } = props;
  const textWhiteClass = 'font-gotham-bold text-white text-opacity-90 text-lg';
  const createdAtUnix = moment(createdAt).unix();

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time over</span>;
    }
    return (
      <span>
        {hours}h {minutes}m {seconds}s
      </span>
    );
  };

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
      <p className={textWhiteClass}>
        {createdAt ? (
          <Countdown date={createdAtUnix + ONE_DAY} renderer={renderer} />
        ) : (
          timeLeft
        )}
      </p>
    </div>
  );
};

LiveTealBlock.defaultProps = {
  createdAt: null,
};

LiveTealBlock.propTypes = {
  onClickAvatar: PropTypes.func.isRequired,
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
};

export default LiveTealBlock;
