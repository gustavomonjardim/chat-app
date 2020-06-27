/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      name
      description
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      owner
      chatID
      chat {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        chatID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chatsByName = /* GraphQL */ `
  query ChatsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        messages {
          items {
            content
            owner
          }
        }
      }
      nextToken
    }
  }
`;
export const messagesByChat = /* GraphQL */ `
  query MessagesByChat(
    $chatID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChat(
      chatID: $chatID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        owner
        chatID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
