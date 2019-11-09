import React from 'react';
import Nav from '../src/config/Nav';
import Routes from '../src/config/Routes';
import {BrowserRouter as Router} from 'react-router-dom';

document.title = 'ReliEnergy';

function App({userId}) {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes ID={userId}/>
      </Router>
    </div>
  );
}

export default App;
