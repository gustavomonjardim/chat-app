import { API, graphqlOperation } from 'aws-amplify';
import React, { useState, useRef, useEffect } from 'react';

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

const Feed: React.FC<Props> = ({ currentChat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    { content: string; owner: string }[]
  >([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getMessages() {
      const { data }: any = await API.graphql(
        graphqlOperation(chatsByName, { name: currentChat })
      );

      const chat = data.chatsByName.items[0];

      setMessages(chat.messages.items);

      console.log(chat);
    }
    setMessages([]);
    getMessages();
  }, [currentChat]);

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
          <Message key={message.content} text={message.content} />
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
