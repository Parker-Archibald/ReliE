import React, {Component} from 'react';
import '../Styles/WNine.css';

class WNine extends Component{

    componentDidMount = () => {
            document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='W-9Back'>
                W-9
            </div>
        )
    }
}
export default WNine;