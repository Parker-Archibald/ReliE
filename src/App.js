import React from 'react';
import Nav from '../src/config/Nav';
import Routes from '../src/config/Routes';
import Login from '../src/Pages/Login';
import {BrowserRouter as Router} from 'react-router-dom';

document.title = 'ReliEnergy';

function App() {
  return (
    <div>
      {/* <Router>
        <Nav/>
        <Routes/>
      </Router> */}
      <Login/>
    </div>
  );
}

export default App;
