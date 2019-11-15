import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Dashboard.css';

class Dashboard extends Component {

    componentDidMount = () => {
        document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='dashBack'>
                <div id='dashboardBox'>
                    <div id='dashboardTitle'>Dashboard</div>
                    <div id='dashLine'/>
                    <div id='myProfile'>
                    <Link to={{pathname: '/profile', menuOpen: false}} style={{textDecoration: 'none', color: 'black'}}>
                    <div id='personIcon'><i class="material-icons" id='perm_identity'>perm_identity</i></div>
                        My Profile
                    </Link>
                    </div>
                    {/* <div id='myProfile'>
                    <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
                    <div id='personIcon'><i class="material-icons" id='perm_identity'>perm_identity</i></div>
                        My Profile
                    </Link>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Dashboard;