import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  width: 300px;
  background-color: #1b1f27;

  @media (max-width: 768px) {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatList = styled.ul`
  padding: 12px;
`;

export const ChatLink = styled.a`
  display: inline-flex;
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  opacity: 0.6;
  border-radius: 6px;
  margin: 8px 0;
  cursor: pointer;
  transition: all 0.2s;

  &.selected {
    background-color: #c24038;
    color: #f8f8f0;
    opacity: 1;

    &:focus {
      outline: none;
    }
  }

  &:not(.selected):hover {
    outline: none;
    background-color: rgba(216, 225, 243, 0.1);
    opacity: 1;
  }

  &:not(.selected):focus {
    outline: none;
    background-color: rgba(216, 225, 243, 0.1);
    opacity: 1;
  }
`;

export const ChatItem = styled.li``;
