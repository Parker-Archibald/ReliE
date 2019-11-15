import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../Styles/NewNav.css';

class NewNav extends Component {

    logout = (e) => {
        e.preventDefault();
        document.cookie = `loggedIn=false`;
        sessionStorage.clear();
        document.location.reload(true);
    }

    handleClick = (e) => {
      e.preventDefault();
      document.getElementById('menuCheckbox').click();
    }
    
    render() {
        return (
    <div class="container">
        <div class='phone'>
            
        <div class="content">
          <nav role="navigation">
            <div id="menuToggle">
            <div id='navTitle'>Reli Energy Solutions</div>
              <input type="checkbox" id='menuCheckbox'/>
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <Link to='/profile'><li id='navProfile'><a>Profile</a></li></Link>
              <Link to='/'><li><a>Dashboard</a></li></Link>
              <Link to='/orders'><li><a>Orders</a></li></Link>
              <Link to='/quotes'><li><a>Quotes</a></li></Link>
              <Link to='/paperwork'><li><a>Paperwork</a></li></Link>
              <Link><li onClick={this.logout}><a>Signout</a></li></Link>
            </ul>
           </div>
          </nav>
        </div>
        </div>
    </div> 
  )
    }
}

export default NewNav;