import { useQuery, useMutation } from '@apollo/react-hooks';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  ChatsByNameQuery,
  ChatsByNameQueryVariables,
  CreateMessageMutation,
  CreateMessageMutationVariables,
} from '../../API';
import { CREATE_MESSAGE } from '../../graphql/mutations';
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
  id: string;
  content: string;
  owner: string;
  chatID: string;
  createdAt: string;
  updatedAt?: string;
}

const Feed: React.FC<Props> = ({ currentChat }) => {
  const [chatID, setChatID] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const { data } = useQuery<ChatsByNameQuery, ChatsByNameQueryVariables>(
    chatsByName,
    { variables: { name: currentChat } }
  );

  const [createMessage] = useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CREATE_MESSAGE);

  useEffect(() => {
    setMessages([]);
  }, [currentChat]);

  useEffect(() => {
    if (data) {
      const chat = data.chatsByName?.items?.[0];
      if (chat) {
        setChatID(chat.id ?? '');
        setMessages((chat.messages?.items ?? []) as Message[]);
      }
    }
  }, [data]);

  const submit = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      const newMessage = {
        id: uuidv4(),
        content: message,
        owner: 'Gustavo',
        createdAt: new Date().toISOString(),
        chatID,
      };
      createMessage({
        variables: { input: newMessage },
      });
      setMessages([...messages, newMessage]);
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
