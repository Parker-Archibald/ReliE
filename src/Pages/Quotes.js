import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import {Link} from 'react-router-dom';
import SingleQuote from '../Pages/SingleQuote';
import '../Styles/Quotes.css';

class Quotes extends Component {

    state = {
        info: ''
    }

    componentDidMount = () => {
        if(sessionStorage.id != undefined) {
        fetch(`${RELIE_API}/quotes/${sessionStorage.id}`)
        .then(results => results.json())
        .then(data => data.map(data => <SingleQuote info={data}/>))
        .then(data => this.setState({info: data}))
        }
        else {
            this.setState({info: <SingleQuote/>})
        }

        document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='quotesBack'>
                <div id='quoteBox'>
                    <div id='quoteTitle'>Quotes</div>
                    <Link to='/test/newquote'><button id='newQuote'>Add New</button></Link>
                </div>
                <div id='allQuotes'>
                    <div id='allQuotesTitle'>All Quotes</div>
                    <div id='underline'/>
                    <div id='quoteOutline'>
                        <div id='allQuoteFields'>
                                <div id='borders'>Quote Number</div>
                                <div id='borders'>Quote Name</div>
                                <div id='borders'>Quote Date</div>
                                <div id='borders'>Quote Total 1</div>
                                <div id='borders'>Quote Total 2</div>
                        </div>
                            <div id='pulledInfo'>{this.state.info}</div>
                        </div>
                        <br/>
                    </div>
            </div>
        )
    }
}
export default Quotes;