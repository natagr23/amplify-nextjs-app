'use client';
import React from 'react';
import '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// //import awsExports from '../../../../aws-exports';

Amplify.configure({
  aws_cognito_region: process.env.AWS_COGNITO_REGION, // (required) - Region where Amazon Cognito project was created
  aws_user_pools_id: process.env.AWS_COGNITO_USER_POOL_ID, // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: process.env.AWS_COGNITO_USER_POOL_APP_CLIENT_ID, // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
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
