/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c726a22ffe52deb94965
 */

import React, { useState, useRef } from 'react';

import { useHistory } from 'react-router-dom';

import sendIcon from '@images/send-icon.svg';
import WhiteHeader from '@common/headers/WhiteHeader';
import ScreenContainer from '@common/ScreenContainer';
import useMutationPostMessage from '@mutations/all/useMutationPostMessage';

import BubbleMessage from './BubbleMessage';
import { mockedMessages } from './mocks';

const PatronBidMessages = () => {
  const messagesBottomRef = useRef(null);
  const mutationBidMessage = useMutationPostMessage();
  const [messages, setMessages] = useState(mockedMessages);
  const [inputMessage, setInputMessage] = useState('');
  const history = useHistory();
  const { state } = history.location;
  const headerTitle = state?.username?.toUpperCase();
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title={headerTitle} />
  );

  const onChangeInputMessage = ({ target }) => {
    setInputMessage(target.value);
  };
  const scrollToBottom = () => {
    messagesBottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onClickSendMessage = () => {
    const dataBlob = new Blob([], {
      type: 'application/json',
    });
    const formData = new FormData();
    formData.append('jsondata', dataBlob);
    formData.append('text', inputMessage);

    if (inputMessage) {
      const newMessage = {
        id: Date.now(), // Temporal id
        senderId: 32, // TODO: Replace 'senderId' dynamically
        text: inputMessage,
      };
      const onSuccess = () => {};
      const onError = () => {};
      mutationBidMessage.mutate(formData, { onSuccess, onError });
      setMessages([...messages, newMessage]);
      setInputMessage('');
      scrollToBottom();
    }
  };
  const onKeyPress = ({ key }) => {
    if (key === 'Enter') {
      onClickSendMessage();
    }
  };
  const welcomeClassname = 'font-gotham-book text-gray-400 text-center';

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="bg-blue-gray py-1">
        <p className="font-gotham-medium text-white text-opacity-95 text-sm text-center">
          {state.packageName}
        </p>
      </div>
      <div className="flex flex-col flex-1 bg-gray-100 px-4 pb-32">
        <div className="w-full mb-7 mt-6">
          <p className={welcomeClassname}>Send a message. Storks love</p>
          <p className={welcomeClassname}>hellos and local tips!</p>
        </div>
        {messages.map(({ id, ...props }) => (
          <div className="mb-6" key={id}>
            <BubbleMessage {...props} />
          </div>
        ))}
        <div ref={messagesBottomRef} />
      </div>
      <div className="fixed container bottom-0">
        <input
          className="font-gotham-book text-xs text-gray-500 bg-white pl-6 pr-14 py-5 w-full"
          type="text"
          placeholder="Say something..."
          onChange={onChangeInputMessage}
          value={inputMessage}
          onKeyPress={onKeyPress}
        />
        <img
          className="absolute right-4 top-1/4"
          src={sendIcon}
          alt=""
          onClick={onClickSendMessage}
          role="presentation"
        />
      </div>
    </ScreenContainer>
  );
};

export default PatronBidMessages;
