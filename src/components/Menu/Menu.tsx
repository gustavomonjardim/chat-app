import { useQuery } from '@apollo/react-hooks';
import React, { useState, useEffect } from 'react';

import { ListChatsQuery, ListChatsQueryVariables } from '../../API';
import { listChats } from '../../graphql/queries';

import { Container, ChatList, ChatItem, ChatLink } from './styles';

interface Props {
  currentChat: string;
  updateChat: (chat: string) => void;
}

interface Chat {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Menu: React.FC<Props> = ({ currentChat, updateChat }) => {
  const [chats, setChats] = useState<Chat[]>([]);

  const { data } = useQuery<ListChatsQuery, ListChatsQueryVariables>(listChats);

  useEffect(() => {
    if (data) {
      setChats((data.listChats?.items ?? []) as Chat[]);
    }
  }, [data]);

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
