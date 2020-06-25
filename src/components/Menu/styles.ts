import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 300px;
  background-color: #1b1f27;
`;

export const ChatList = styled.ul`
  padding: 12px;
`;

export const ChatItem = styled.li`
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
  padding: 10px 12px;
  border-radius: 6px;
  margin: 8px 0;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: rgba(216, 225, 243, 0.1);
    opacity: 1;
  }
`;