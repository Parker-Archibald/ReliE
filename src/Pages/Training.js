import React, {Component} from 'react';
import '../Styles/Training.css';

class Training extends Component {

    componentDidMount = () => {
            document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='trainingBack'>
                Training
            </div>
        )
    }
}
export default Training;