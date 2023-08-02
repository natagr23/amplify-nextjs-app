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
import Home2 from '../components/Home';
import About2 from '../components/About';
import PremiumPage from '../components/PremiumPage';
import '@aws-amplify/ui-react/styles.css';

function Home() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <NavLink className="content" to="/">
            Home
          </NavLink>
          <NavLink className="content" to="/about">
            About
          </NavLink>
          <NavLink className="content" to="/premium">
            Premium Content
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home2 />}></Route>
          <Route path="/about2" element={<About2 />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
