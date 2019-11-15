import React, {Component} from 'react';
import '../Styles/Paperwork.css';

class Paperwork extends Component {

    componentDidMount = () => {
        document.getElementById('menuCheckbox').click();
    }
    
    render() {
        return(
            <div id='paperworkBack'>
                Paperwork
            </div>
        )
    }
}
export default Paperwork;