import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import Chat from './components/Chat';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Chat />
    </>
  );
}

export default withAuthenticator(App);
