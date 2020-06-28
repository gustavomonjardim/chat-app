import { ApolloProvider } from '@apollo/react-hooks';
import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import { client } from './client';
import Chat from './components/Chat';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Chat />
    </ApolloProvider>
  );
}

export default withAuthenticator(App);
