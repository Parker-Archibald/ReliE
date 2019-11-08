import React, {Component} from 'react';
import '../Styles/Login.css';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.callback(this.state.email, this.state.password);
    }

    render() {
        return(
            <div>
                <div id='logo'></div>
                <form onSubmit={this.handleSubmit}>
                    <div id='loginEmailIn'><input type='email' id='loginEmail' name='email' placeholder='Email' onChange={this.handleChange}/></div>
                    <div id='loginPassIn'><input type='password' id='loginPass' name='password' placeholder='Password' onChange={this.handleChange}/></div>
                    <div id='loginSubmitBtn'><button type='submit' id='loginSubmit' className='loginSubmit'>Submit</button></div>
                </form>
                <div id='forgotPass'>Forgot Password?</div>
            </div>
        )
    }
}
export default Login;