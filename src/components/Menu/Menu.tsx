import { API, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';

import { listChats } from '../../graphql/queries';

import { Container, ChatList, ChatItem, ChatLink } from './styles';

interface Props {
  currentChat: string;
  updateChat: (chat: string) => void;
}

const Menu: React.FC<Props> = ({ currentChat, updateChat }) => {
  const [chats, setChats] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function getMessages() {
      const { data }: any = await API.graphql(graphqlOperation(listChats));
      console.log(data);
      setChats(data?.listChats?.items ?? []);
    }
    getMessages();
  }, []);

  console.log(chats);

  return (
    <Container>
      <ChatList>
        {chats.map((chat) => (
          <ChatItem key={chat.id}>
            <ChatLink
              onClick={() => updateChat(chat.name)}
              className={currentChat === chat.name ? 'selected' : ''}
              tabIndex={currentChat === chat.name ? -1 : 0}
            >
              {`# ${chat.name}`}
            </ChatLink>
          </ChatItem>
        ))}
      </ChatList>
    </Container>
  );
};

export default Menu;
