import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from '../src/Pages/Login';
import * as serviceWorker from './serviceWorker';

let testCookie;
let cookieArray = [];

export const changeLoginStatus = (info) => {
    if(info.id > 0) {
        document.cookie = `loggedIn=true, id=${info.id}`;
        testLogin(info.id);
    }
    else {
        alert('User not Logged in');
        document.location.reload(true);
    }
}

export const testLogin = (id) => {
    testCookie = decodeURIComponent(document.cookie);
    cookieArray = testCookie.split(',');
    if (cookieArray[0] === `loggedIn=true`) {
        ReactDOM.render(<App userId={id}/>, document.getElementById('root'));
    }
    else {
        ReactDOM.render(<Login callback={changeLoginStatus}/>, document.getElementById('root'));
    }
}

testLogin();


serviceWorker.unregister();
