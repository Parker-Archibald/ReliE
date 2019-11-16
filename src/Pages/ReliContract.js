import React, {Component} from 'react';
import '../Styles/RelieContracts.css';

class ReliContracts extends Component {

    componentDidMount = () => {
            document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='RelieContractsBack'>
                contracts
            </div>
        )
    }
}
export default ReliContracts;