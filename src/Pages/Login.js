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
                <div id='logo'><img src={require('../Styles/Pictures/Logo.png')} style={{width: '200px'}}/></div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' id='loginEmail' name='email' placeholder='Email' onChange={this.handleChange}/>
                    <input type='password' id='loginPass' name='password' placeholder='Password' onChange={this.handleChange}/>
                    <button type='submit' id='loginSubmit' className='loginSubmit'>Submit</button>
                </form>
                <div id='forgotPass'>Forgot Password?</div>
            </div>
        )
    }
}
export default Login;