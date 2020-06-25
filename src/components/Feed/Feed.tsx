import React, { useState, useRef, useEffect } from 'react'

import Message from '../Message';

import { Container, Header, Title, Description, Messages, Input } from './styles';


const Feed = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>(["teste 1", "teste 2", "teste 2", "teste 2", "teste 2", "teste 2", "teste 2", "teste 2", "teste 2", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]);
  const messagesRef = useRef<HTMLDivElement>(null)

  const submit = ({ key } : React.KeyboardEvent<HTMLInputElement>) => {
    if(key === 'Enter') {
      setMessages([...messages, message]);
      setMessage('');
    }
  }

  useEffect(() => {
    if(messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current?.scrollHeight + 100;
    }
  }, [messages])

  return (
    <Container>
      <Header>
        <Title>#react</Title>
        <Description>Discussions about react.</Description>
      </Header>
      <Messages ref={messagesRef}>
  { messages.map(message => <Message key={message} text={message} />)}
      </Messages>
      <Input 
        value={message} 
        onChange={({ target }) => setMessage(target.value)} 
        onKeyPress={submit}
        placeholder="Message #react"
      />
    </Container>
  )
}

export default Feed;
