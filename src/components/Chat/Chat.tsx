import React from "react";

import Menu from "../Menu";
import Feed from '../Feed';

import { Container } from './styles'

const Chat = () => {
  return (
    <Container>
      <Menu />
      <Feed/>
    </ Container>
  );
};

export default Chat;
