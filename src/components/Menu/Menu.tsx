import React from 'react'

import { Container, ChatList, ChatItem } from './styles';

const Menu = () => {
  return (
    <Container>
      <ChatList>
        <ChatItem># react</ChatItem>
        <ChatItem># typescript</ChatItem>
        <ChatItem># graphql</ChatItem>
      </ChatList>
    </Container>
  )
}

export default Menu;
