'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

import './App.css';

import '@aws-amplify/ui-react/styles.css';

function Home() {
  return <div>This is the home </div>;
}

export default Home;
