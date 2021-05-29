import React from 'react';
import PropTypes from 'prop-types';

import { myId } from './mocks';

const BubbleMessage = ({ senderId, text }) => {
  const bgColor =
    senderId === myId ? 'bg-teal-light float-right' : 'bg-gray-200 float-left';
  return (
    <div className={`p-4 rounded-2xl ${bgColor} w-60`}>
      <p className="font-gotham-book text-gray-700 text-xs">{text}</p>
    </div>
  );
};
BubbleMessage.propTypes = {
  senderId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default BubbleMessage;
