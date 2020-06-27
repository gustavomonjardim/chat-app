import React from 'react';

import {
  Container,
  Avatar,
  Content,
  Header,
  Author,
  Date,
  Text,
} from './styles';

interface Props {
  text: string;
}

const Message = ({ text }: Props) => {
  return (
    <Container>
      <Avatar />
      <Content>
        <Header>
          <Author>Gustavo Monjardim</Author>
          <Date>25/06/2020</Date>
        </Header>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

export default Message;
