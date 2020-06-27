import React, { useState } from 'react';

import Feed from '../Feed';
import Menu from '../Menu';

import { Container } from './styles';

const Chat = () => {
  const [currentChat, setCurrentChat] = useState<string>(
    window.location.pathname.split('/')[1]
  );

  const updateChat = (chat: string) => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, chat, `/${chat}`);
    setCurrentChat(chat);
  };

  return (
    <Container>
      <Menu currentChat={currentChat} updateChat={updateChat} />
      <Feed currentChat={currentChat} />
    </Container>
  );
};

export default Chat;
