import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import '../Styles/Profile.css';

class Profile extends Component {

    state = {
        id: '',
        first_name: '',
        file: ''
    }

    componentDidMount = () => {
        fetch(`${RELIE_API}/profile/${sessionStorage.id}`)
        .then(results => results.json())
        .then(data => this.setState({first_name: data.first_name, last_name: data.last_name}));
    }

    showPicture = (e) => {
        e.preventDefault();
        document.getElementById('profilePicIn').className = 'showProfilePic';
        document.getElementById('profilePic').className = 'hideProfilePic';
        this.setState({file: URL.createObjectURL(e.target.files[0])});
    }

    handleBtn = (e) => {
        e.preventDefault();
        document.getElementById('fileSelect').click();
    }

    render() {
        return(
            <div id='profileBack'>
                <div id='profileBox'>
                    <div id='profilePic'/>
                    <div id='selectPicDiv'><button onClick={this.handleBtn} id='selectImgBtn'>Select Image</button></div>
                    <img id='profilePicIn' className='profilePicIn' src={this.state.file}/>
                    <input type='file' accept='image/jpeg, image/png' onChange={this.showPicture} id='fileSelect'/>
                    <div>{this.state.first_name}</div>
                    <div>{this.state.last_name}</div>
                </div>
            </div>
        )
    }
}
export default Profile;