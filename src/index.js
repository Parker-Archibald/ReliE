import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from '../src/Pages/Login';
import * as serviceWorker from './serviceWorker';

let testCookie;
let cookieArray = [];

export const changeLoginStatus = (info) => {
    console.log(info)
    if(info.id > 0) {
        document.cookie = `loggedIn=true`;
        sessionStorage.setItem('id', `${info.id}`);
        testLogin();
    }
    else if (info === 'p@p.com') {
        document.cookie = `loggedIn=true`;
        testLogin();
    }
    else {
        alert('User not Logged in');
        document.location.reload(true);
    }
}

export const testLogin = () => {
    testCookie = decodeURIComponent(document.cookie);
    cookieArray = testCookie.split(',');
    if (cookieArray[0] === `loggedIn=true`) {
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
    else {
        ReactDOM.render(<Login callback={changeLoginStatus}/>, document.getElementById('root'));
    }
}

testLogin();


serviceWorker.unregister();
