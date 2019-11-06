import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from '../src/Pages/Login';
import * as serviceWorker from './serviceWorker';


let aEmail = 'p@p.com';
let pass = 'pass';

let testCookie;
let cookieArray = [];

export const changeLoginStatus = (email, password) => {
    if(email === aEmail && password === pass) {
        document.cookie = `loggedIn=true`;
        testLogin(true);
    }
    else {
        alert('User not Logged in');
    }
}

export const testLogin = (status) => {
    if (document.cookie === `loggedIn=true`) {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
    else {
        ReactDOM.render(<Login callback={changeLoginStatus}/>, document.getElementById('root'));
    }
}

testLogin();


serviceWorker.unregister();
