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

    componentDidMount = () => {
      let dropdown = document.getElementsByClassName("dropdown-btn");
      let i;

      for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
        });
      }
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
              <Link to={{pathname: '/profile', menuOpen: true}} ><li id='navProfile'><a>Profile</a></li></Link>
              <Link to={{pathname: '/', menuOpen: true}}><li><a>Dashboard</a></li></Link>
              <Link to='/orders'><li><a>Orders</a></li></Link>
              <Link to='/quotes'><li><a>Quotes</a></li></Link>
              {/* <Link to='/paperwork'><li><a>Paperwork</a></li></Link> */}
              <button class="dropdown-btn">Paperwork 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <div><Link to='/1099'>1099</Link></div>
                <div><Link to='/directDeposit'>Direct Deposit</Link></div>
                <div><Link to='/W9'>W-9</Link></div>
                <div><Link to='/training'>Training</Link></div>
              </div>
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