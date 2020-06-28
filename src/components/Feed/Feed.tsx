import { useQuery } from '@apollo/react-hooks';
import React, { useState, useRef, useEffect } from 'react';

import { ChatsByNameQuery, ChatsByNameQueryVariables } from '../../API';
import { chatsByName } from '../../graphql/queries';
import Message from '../Message';

import {
  Container,
  Header,
  Title,
  Description,
  Messages,
  Input,
} from './styles';

interface Props {
  currentChat: string;
}

interface Message {
  id?: string;
  content: string;
  owner: string;
  chatID?: string;
  createdAt?: string;
  updatedAt?: string;
}

const Feed: React.FC<Props> = ({ currentChat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const { data } = useQuery<ChatsByNameQuery, ChatsByNameQueryVariables>(
    chatsByName,
    { variables: { name: currentChat } }
  );

  useEffect(() => {
    setMessages([]);
  }, [currentChat]);

  useEffect(() => {
    if (data) {
      const chat = data.chatsByName?.items?.[0];
      setMessages((chat?.messages?.items ?? []) as Message[]);
    }
  }, [data]);

  const submit = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      setMessages([...messages, { content: message, owner: 'Gustavo' }]);
      setMessage('');
    }
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 100;
    }
  }, [messages]);

  return (
    <Container>
      <Header>
        <Title>{`#${currentChat}`}</Title>
        <Description>Discussions about react.</Description>
      </Header>
      <Messages ref={messagesRef}>
        {messages.map((message) => (
          <Message key={message.id} text={message.content} />
        ))}
      </Messages>
      <Input
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={submit}
        placeholder={`Message #${currentChat}`}
      />
    </Container>
  );
};

export default Feed;
