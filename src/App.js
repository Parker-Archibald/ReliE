import React from 'react';
import NewNav from '../src/config/NewNav';
import Routes from '../src/config/Routes';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';

document.title = 'ReliEnergy';

function App({userId}) {
  return (
    <div id='allApp'>
      <Router>
        <NewNav/>
        <Routes ID={userId}/>
      </Router>
    </div>
  );
}

export default App;
