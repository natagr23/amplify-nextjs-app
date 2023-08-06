'use client';
import React from 'react';
import '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import awsExports from '../../../../aws-exports';
Amplify.configure({
  region: process.env.AWS_COGNITO_REGION,
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.AWS_COGNITO_USER_POOL_APP_CLIENT_ID,
});

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
