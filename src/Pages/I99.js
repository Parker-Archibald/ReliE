import React, { Component } from "react";
import '../Styles/1099.css';

class I99 extends Component {

    componentDidMount = () => {
            document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='I99Back'>
                <div id='I99Box'>1099 Page</div>
            </div>
        )
    }
}
export default I99;