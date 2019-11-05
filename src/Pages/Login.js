import React, {Component} from 'react';
import '../Styles/Login.css';

class Login extends Component {
    render() {
        return(
            <div>
                <div id='logo'><img src={require('../Styles/Pictures/Logo.png')} style={{width: '200px'}}/></div>
                <input type='email' id='loginEmail' placeholder='Email'/>
                <input type='password' id='loginPass' placeholder='Password'/>
                <button type='submit' id='loginSubmit'>Submit</button>
                <div id='forgotPass'>Forgot Password?</div>
            </div>
        )
    }
}
export default Login;