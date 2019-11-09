import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';

class Profile extends Component {

    state = {
        id: '',
        first_name: ''
    }

    componentDidMount = () => {
        let testCookie = decodeURIComponent(document.cookie);
        let cookieArray = testCookie.split('=');
        fetch(`${RELIE_API}/profile/${cookieArray[2]}`)
        .then(results => results.json())
        .then(data => this.setState({first_name: data.first_name, last_name: data.last_name}));
    }

    render() {
        return(
            <div>
                {this.state.first_name}
                {this.state.last_name}
            </div>
        )
    }
}
export default Profile;