import React, {Component} from 'react';
import '../Styles/DirectDeposit.css';

class DirectDeposit extends Component {

    componentDidMount = () => {
            document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='directDepositBack'>
                DirectDeposit
            </div>
        )
    }
}
export default DirectDeposit;