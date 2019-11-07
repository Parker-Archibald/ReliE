import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Nav.css';

let open = false;

class Nav extends Component {

    openBar = () => {
        document.getElementById('leftNav').className = 'leftNavShowing';
    }

    closeBar = () => {
        document.getElementById('leftNav').className = 'leftNavClose';
    }

    logout = (e) => {
        e.preventDefault();
        document.cookie = `loggedIn=false`;
        document.location.reload(true);
    }

    render() {
        return(
            <div>
                <h1 id='calculatorTitle'><meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <div class="container" onClick={this.openBar} onMouseLeave={this.closeBar}>
                    <div id='bar1' className="bar1"></div>
                    <div id='bar2' className="bar2"></div>
                    <div id='bar3' className="bar3"></div>
                </div>
                RELI ENERGY SOLUTIONS
                </h1>
                <div id='leftNav' className='leftNav'>
                    <Link to='/profile'><button id='profile'>Profile</button></Link>
                    <Link to='/'><button id='dashboard'>Dashboard</button></Link>
                    <Link to='/orders'><button id='orders'>Orders</button></Link>
                    <Link to='/quotes'><button id='quotes'>Quotes</button></Link>
                    <Link to='/paperwork'><button id='paperwork'>Paperwork</button></Link>
                    <button id='signout' onClick={this.logout}>Signout</button>
                </div>
                <div id='bottomOfPage'>
                    <div id='siteName'>www.relienergysolutions.com</div>
                </div>
            </div>
        )
    }
}
export default Nav;