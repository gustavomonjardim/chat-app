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
  author: string;
  date: string;
}

const Message: React.FC<Props> = ({ text, author, date }) => {
  console.log(date);
  return (
    <Container>
      <Avatar />
      <Content>
        <Header>
          <Author>{author}</Author>
          <Date>{date}</Date>
        </Header>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

export default Message;
