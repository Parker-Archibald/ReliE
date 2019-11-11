import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import '../Styles/Profile.css';

class Profile extends Component {

    state = {
        id: '',
        first_name: ''
    }

    componentDidMount = () => {
        fetch(`${RELIE_API}/profile/${sessionStorage.id}`)
        .then(results => results.json())
        .then(data => this.setState({first_name: data.first_name, last_name: data.last_name}));
    }

    render() {
        return(
            <div id='profileBack'>
                {this.state.first_name}
                {this.state.last_name}
            </div>
        )
    }
}
export default Profile;