import React from 'react';
import PropTypes from 'prop-types';

const ChatItemCard = (props) => {
  const {
    photoUrl,
    packageName,
    username,
    lastMessageAt,
    seen,
    onClick,
  } = props;
  const titleFontClassName = seen ? 'font-gotham-medium' : 'font-gotham-bold';
  const bookOrMedium = seen ? 'font-gotham-book' : 'font-gotham-medium';

  return (
    <div
      className="flex justify-between py-4 bg-transparent border-b cursor-pointer"
      onClick={onClick}
      role="presentation"
    >
      <div className="flex items-center">
        <img className="w-11 rounded-full" src={photoUrl} alt="" />
        <div className="ml-4">
          <p className={`${titleFontClassName} text-blue-gray text-sm`}>
            {packageName}
          </p>
          <p className={`${bookOrMedium} text-blue-gray text-sm`}>{username}</p>
        </div>
      </div>
      <p className={`${bookOrMedium} text-blue-gray text-2xs`}>
        {lastMessageAt}
      </p>
    </div>
  );
};

ChatItemCard.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  lastMessageAt: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChatItemCard;
