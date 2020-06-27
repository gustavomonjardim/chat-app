import React from "react";

import { Container, ChatList, ChatItem, ChatLink } from "./styles";

interface Props {
  currentChat: string;
  updateChat: (chat : string) => void;
}

const chats = [
  'react',
  'typescript',
  'graphql',
  'amplify'
]

const Menu : React.FC<Props> = ({ currentChat, updateChat}) => {
  return (
    <Container>
      <ChatList>
        {chats.map(chat => (
          <ChatItem key={chat} >
            <ChatLink 
              onClick={() => updateChat(chat)} 
              className={currentChat === chat ? 'selected' : ''}
              tabIndex={currentChat === chat ? -1 : 0}
              >
                {`# ${chat}`}
            </ChatLink>
          </ChatItem>
        ))}
      </ChatList>
    </Container>
  );
};

export default Menu;
