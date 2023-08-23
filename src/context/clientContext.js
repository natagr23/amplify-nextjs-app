'use client';
import React, { useState, createContext, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

export const clientContext = createContext({});

export const clientContextProvider = (props) => {
  const [client, setClient] = useState('65464');

  const updateClients = (data) => {
    setClient((prevState) => [...prevState, data]);
  };

  // useEffect(() => {
  //   <Authenticator>{({ user }) => setClient(user.username)}</Authenticator>;
  // }, []);
  // console.log(user.username);
  return (
    <clientContext.Provider>
      <Authenticator>
        value=
        {{
          updateClients: updateClients,
          client: client,
          setClient: user.username,
        }}
        {props.children}
        console.log(setClient);
      </Authenticator>
    </clientContext.Provider>
  );
};
