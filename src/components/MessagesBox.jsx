import React from 'react';
import { useSelector } from 'react-redux';
import { getMessages } from '../selectors';

const MessagesBox = ({ currentChannelId }) => {
  const currentChannelMessages = useSelector(getMessages(currentChannelId));
  return (
    <div id="messages-box" className="chat-messages overflow-auto mb-3">
      {currentChannelMessages && currentChannelMessages.map((message) => (
        <div key={message.id}>
          <b>{message.nickName}</b>
          :
          {' '}
          {message.message}
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
