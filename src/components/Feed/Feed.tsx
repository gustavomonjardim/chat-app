import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import { formatDistance } from 'date-fns';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  ChatsByNameQuery,
  ChatsByNameQueryVariables,
  CreateMessageMutation,
  CreateMessageMutationVariables,
  OnCreateMessageSubscription,
} from '../../API';
import { CREATE_MESSAGE } from '../../graphql/mutations';
import { chatsByName } from '../../graphql/queries';
import { onCreateMessage } from '../../graphql/subscriptions';
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
  username: string;
}

interface Message {
  id: string;
  content: string;
  owner: string;
  chatID: string;
  createdAt: string;
  updatedAt?: string;
}

let currentSubscriptionMessage = '';

const Feed: React.FC<Props> = ({ currentChat, username }) => {
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

  const { data: subscriptionData } = useSubscription<
    OnCreateMessageSubscription
  >(onCreateMessage);

  useEffect(() => {
    setMessages([]);
  }, [currentChat]);

  useEffect(() => {
    const handleNewMessage = (message: Message) => {
      // The onCreateMessage subscription is firing twice,
      // so this verification guarentees  that
      // we haven't added the message to our list already
      if (message?.id !== currentSubscriptionMessage) {
        return;
      }

      // Ignores the message if the current user is the author
      if (message?.owner === username) {
        return;
      }
      setMessages((current) => [...current, message] as Message[]);
    };

    if (subscriptionData) {
      const { onCreateMessage } = subscriptionData;
      handleNewMessage(onCreateMessage as Message);
      currentSubscriptionMessage = onCreateMessage?.id ?? '';
    }
  }, [subscriptionData, username]);

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
        owner: username,
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
          <Message
            key={message.id}
            author={message.owner}
            date={formatDistance(new Date(message.createdAt), new Date(), {
              addSuffix: true,
            })}
            text={message.content}
          />
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
