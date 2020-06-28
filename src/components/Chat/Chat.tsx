import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';

import Feed from '../Feed';
import Menu from '../Menu';

import { Container } from './styles';

const Chat: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string>(
    window.location.pathname.split('/')[1]
  );

  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getCurrentUser() {
      const user = await Auth.currentUserInfo();
      setUsername(user.username);
    }
    getCurrentUser();
  }, []);

  const updateChat = (chat: string) => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, chat, `/${chat}`);
    setCurrentChat(chat);
  };

  return (
    <Container>
      <Menu currentChat={currentChat} updateChat={updateChat} />
      <Feed currentChat={currentChat} username={username} />
    </Container>
  );
};

export default Chat;
