import React from 'react';
import { useHistory } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import ChatItemCard from '@common/cards/ChatItemCard';

import { chatList } from './mocks';

const ChatList = () => {
  const history = useHistory();
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="MESSAGES" />
  );
  const onClickChatItem = ({ recipientId, username, packageName }) => {
    history.push(`messages/${recipientId}`, {
      username,
      packageName,
    });
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="flex-1 bg-gray-50 px-4">
        {chatList.map(({ id, ...props }) => (
          <ChatItemCard
            key={id}
            onClick={() => onClickChatItem(props)}
            {...props}
          />
        ))}
      </div>
    </ScreenContainer>
  );
};

export default ChatList;
