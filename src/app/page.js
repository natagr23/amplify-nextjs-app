'use client';

import { Amplify } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';

function Home() {
  return <div>This is the home </div>;
}

export default Home;
