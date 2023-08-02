'use client';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react';

const Login = () => {
  return (
    <div>
      Login
      <Authenticator>
        {({ signOut }) => (
          <div>
            <h1>Hello, welcome to my site</h1>
            <h3>You´re autehnticated! this is the premium page</h3>
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default Login;
