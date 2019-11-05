import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from '../src/Pages/Login';
import * as serviceWorker from './serviceWorker';

let loggedIn = false;
let aEmail = 'p@p.com';
let pass = 'pass';

export const changeLoginStatus = (email, password) => {
    if(email === aEmail && password === pass) {
        loggedIn = true;
        testLogin(true);
    }
    else {
        alert('User not Logged in');
    }
}

export const testLogin = (status) => {
    if (loggedIn === true || status === true) {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
    else {
        ReactDOM.render(<Login callback={changeLoginStatus}/>, document.getElementById('root'));
    }
}

testLogin();


serviceWorker.unregister();
